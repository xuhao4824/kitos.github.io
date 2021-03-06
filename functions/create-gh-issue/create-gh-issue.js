const axios = require('axios')
const crypto = require('crypto')

const github = axios.create({
  baseURL: 'https://api.github.com',
  headers: { 'User-Agent': 'blog-typo-issue-creator' },
  auth: {
    username: 'kitos',
    password: process.env.GH_TOKEN,
  },
})

const ISSUES_ROOT = '/repos/kitos/kitos.github.io/issues'

let createTypoIssue = ({ title, link, source, content }) =>
  github.post(ISSUES_ROOT, {
    title: `Typo in blog post "${title}"`,
    body: `
There is a typo post [${title}](${link}).

### Source:

${source}

### Suggestion:

${content}`,
    assignees: ['kitos'],
    labels: ['blog:typo'],
  })

let createFeedbackIssue = ({ content }) =>
  github.post(ISSUES_ROOT, {
    title: 'Feedback',
    body: content,
    assignees: ['kitos'],
    labels: ['feedback'],
  })

const hash = obj =>
  crypto
    .createHash('md5')
    .update(JSON.stringify(obj))
    .digest('hex')
    .substr(0, 6)

let createBug = async (
  headers,
  { message = 'Reported by user', content, stack }
) => {
  let userAgent = headers['user-agent']
  let referer = headers['referer']
  let issueHash = hash({ message, referer, stack, content })
  let userAgentHash = hash(userAgent)
  let hashLabel = `hash:${issueHash}`
  let userAgentLabel = `ua-hash:${userAgentHash}`
  let { data: existingIssues } = await github.get(ISSUES_ROOT, {
    params: { labels: hashLabel },
  })

  if (existingIssues.length !== 0) {
    let existingIssue = existingIssues[0]
    let commentsPath = `${ISSUES_ROOT}/${existingIssue.number}/comments`
    let { data: comments } = await github.get(commentsPath)
    let hasSameUserAgent =
      existingIssue.labels.some(({ name }) => name === userAgentLabel) ||
      comments.some(({ body }) => body === userAgent)

    if (!hasSameUserAgent) {
      await github.post(commentsPath, {
        body: userAgent,
      })
    }

    return { data: existingIssue }
  }

  return github.post(ISSUES_ROOT, {
    title: `Bug! "${message}"`,
    body: `
*This issue was automatically generated.*

### Page url:

${referer}

${
  content
    ? `
### Description:

${content}

`
    : ''
}

${
  stack
    ? `
### Stack:

\`\`\`
${stack.split('@').join('\n@')}
\`\`\`
`
    : ''
}

### User agent:

\`\`\`
${userAgent}
\`\`\``,
    assignees: ['kitos'],
    labels: ['bug', hashLabel, userAgentLabel],
  })
}

module.exports.handler = async event => {
  let body = JSON.parse(event.body)
  let { type } = body

  let {
    data: { html_url },
  } = await (type === 'typo'
    ? createTypoIssue(body)
    : type === 'feedback'
    ? createFeedbackIssue(body)
    : createBug(event.headers, body))

  return { statusCode: 200, body: JSON.stringify({ url: html_url }) }
}
