const path = require('path')
const intersection = require('lodash.intersection')
const slugify = require('slugify')

let groupPostsByTag = posts =>
  posts.reduce(
    (map, post) =>
      post.tags.reduce((map, tag) => {
        let tagPosts = [post]

        if (map.has(tag)) {
          tagPosts = [...map.get(tag), ...tagPosts]
        }

        return map.set(tag, tagPosts)
      }, map),
    new Map()
  )

let getSimilarPost = ({ slug, tags }, posts) =>
  posts
    .map(p => ({ ...p, similarity: intersection(p.tags, tags).length }))
    .filter(p => p.slug !== slug && p.similarity !== 0)
    .sort((a, b) => b.similarity - a.similarity || b.date.localeCompare(a.date))
    .slice(0, 3)
    .map(({ slug }) => slug)

module.exports = ({ graphql, actions: { createPage } }) =>
  graphql(`
    {
      posts: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "_content/blog/" } }
      ) {
        edges {
          node {
            id
            frontmatter {
              date
              title
              tags
            }
          }
        }
      }
    }
  `).then(({ data }) => {
    let posts = data.posts.edges.map(
      ({
        node: {
          frontmatter: { title, tags = [], ...f },
          ...post
        },
      }) => ({
        slug: slugify(title.toLowerCase()),
        tags,
        ...post,
        ...f,
      })
    )

    // create blog post pages
    posts.forEach(post =>
      createPage({
        path: `/blog/${post.slug}/`,
        component: path.resolve('./src/templates/blog-post.js'),
        context: {
          slug: post.slug,
          similarPosts: getSimilarPost(post, posts),
        },
      })
    )

    let postsByTag = groupPostsByTag(posts)

    postsByTag.set('', posts)

    // create blog tag root pages
    postsByTag.forEach((posts, tag) =>
      createPage({
        path: `/blog/${tag ? `tag/${tag}/` : ''}`,
        component: path.resolve('./src/templates/blog-post-list.js'),
        context: {
          tag,
          ids: posts.map(({ id }) => id),
          slugById: posts.reduce(
            (map, { id, slug }) => ({ ...map, [id]: slug }),
            {}
          ),
        },
      })
    )
  })
