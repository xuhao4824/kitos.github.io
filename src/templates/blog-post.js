import React from 'react'
import { graphql, Link } from 'gatsby'
import { format } from 'date-fns/fp'
import { Box, Flex } from '@rebass/grid'
import { DiscussionEmbed } from 'disqus-react'

import { BlogPostContent, BlogTags } from '../components/blog'
import { SEO } from '../components'
import { buildPostLink, langToEmoji } from '../components/blog/utils'

let formatDate = d => format('MMMM dd, yyyy', new Date(d))

let buildSchemaOrg = ({ title, date, tags }) => ({ author }) => [
  {
    '@context': 'http://schema.org',
    '@type': 'BlogPosting',
    datePublished: date,
    headline: title,
    keywords: tags.join(', '),
    author,
  },
]

let BlogPost = ({
  data: {
    post: {
      frontmatter: { slug, lang, title, date, tags },
      headings,
      html,
    },
    translations,
    similarPosts,
    site,
  },
}) => {
  let postLink = buildPostLink({ slug, lang })
  let absolutePostLink = `${site.meta.siteUrl}${postLink}`

  return (
    <>
      <SEO
        title={title}
        isBlogPost
        schemaOrgItems={buildSchemaOrg({ title, date, tags })}
      />

      <h1>{title}</h1>

      <Flex justifyContent="space-between">
        <small>{formatDate(date)}</small>

        {translations.edges.length > 0 && (
          <Flex>
            <Box mr={1}>Also available in:</Box>

            <Flex as="ul" m={0} style={{ listStyle: 'none' }}>
              {translations.edges.map(({ node: { frontmatter: { lang } } }) => (
                <li key={lang}>
                  <Link
                    to={buildPostLink({ slug, lang })}
                    style={{ textDecoration: 'none' }}
                  >
                    {langToEmoji(lang)}
                  </Link>
                </li>
              ))}
            </Flex>
          </Flex>
        )}
      </Flex>

      <BlogTags tags={tags} />

      <BlogPostContent
        post={{ title, postUrl: absolutePostLink, headings, html }}
      />

      {similarPosts.edges.length > 0 && (
        <>
          <h2>Read next</h2>

          <Flex
            as="ul"
            my={[2, 4]}
            mx={[0, -2]}
            flexDirection={['column', 'row']}
            justifyContent="space-between"
            css={`
              list-style: none;
            `}
          >
            {similarPosts.edges
              .map(({ node: { frontmatter, ...p } }) => ({
                ...frontmatter,
                ...p,
              }))
              .map(({ slug, lang, title, date, timeToRead }) => (
                <Flex
                  as="li"
                  key={slug}
                  flex={1}
                  flexDirection="column"
                  mx={[0, 2]}
                >
                  <Link to={buildPostLink({ slug, lang })}>{title}</Link>

                  <Box as="small" mt={2}>
                    {formatDate(date)} • {timeToRead} min read
                  </Box>
                </Flex>
              ))}
          </Flex>
        </>
      )}

      <DiscussionEmbed
        shortname={process.env.GATSBY_DISQUS_SHORTNAME}
        config={{
          url: absolutePostLink,
          identifier: postLink,
          title,
        }}
      />
    </>
  )
}

export default BlogPost

export const query = graphql`
  query($id: String!, $slug: String, $similarPosts: [String!]!) {
    post: markdownRemark(id: { eq: $id }) {
      frontmatter {
        slug
        lang
        title
        date
        tags
      }

      headings {
        value
        depth
      }
      html
    }

    translations: allMarkdownRemark(
      filter: { id: { ne: $id }, frontmatter: { slug: { eq: $slug } } }
    ) {
      edges {
        node {
          frontmatter {
            lang
            title
          }
        }
      }
    }

    similarPosts: allMarkdownRemark(filter: { id: { in: $similarPosts } }) {
      edges {
        node {
          frontmatter {
            slug
            lang
            title
            date
            tags
          }
          timeToRead
        }
      }
    }

    site {
      meta: siteMetadata {
        siteUrl
      }
    }
  }
`
