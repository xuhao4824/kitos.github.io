import React from 'react'
import { graphql } from 'gatsby'
import { Box, Flex } from '@rebass/grid'

import Layout from '../components/layout'
import VideoCard from '../components/video-card'

let PublicActivityPage = ({ data: { resp: { videos = [] } = {} } = {} }) => (
  <Layout>
    <h2>Talks</h2>

    <Flex as="ul" m={'0 -20px'} flexWrap="wrap" css={{ listStyle: 'none' }}>
      {videos
        .map(v => v.node)
        .map(v => (
          <Box as="li" key={v.id} width={[1, 'calc(50% - 20px)']} m={10}>
            <VideoCard video={v} />
          </Box>
        ))}
    </Flex>
  </Layout>
)

export let query = graphql`
  query PublicActivityQuery {
    resp: allYouTubeVideo(
      sort: { fields: [snippet___publishedAt], order: DESC }
    ) {
      videos: edges {
        node {
          id
          snippet {
            title
            tags
            thumbnails {
              medium {
                url
                width
              }
              high {
                url
                width
              }
              maxres {
                url
                width
              }
            }
          }
        }
      }
    }
  }
`

export default PublicActivityPage