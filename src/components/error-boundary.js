import React from 'react'
import { Box } from '@rebass/grid'

import { createGHIssue } from './create-gh-issue'

class ErrorBoundary extends React.Component {
  state = {}

  componentDidCatch({ message, stack }, { componentStack }) {
    this.setState({ message, stack, componentStack }, () => {
      if (process.env.NODE_ENV === 'production') {
        createGHIssue({
          type: 'bug',
          message,
          stack,
        }).then(({ url }) => this.setState({ issueUrl: url }))
      }
    })
  }

  render() {
    return this.state.message ? (
      <Box mt={20}>
        <p>Something went wrong :-(</p>

        {!this.state.issueUrl ? (
          <p>Just a moment, I'll try to report about this problem...</p>
        ) : (
          <p>
            Thanks for the patience! The issue was reported and you can find it
            <a
              href={this.state.issueUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              here
            </a>
            .
          </p>
        )}
      </Box>
    ) : (
      this.props.children
    )
  }
}

export { ErrorBoundary as default, ErrorBoundary }
