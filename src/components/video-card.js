import React from 'react'
import { cold } from 'react-hot-loader'
import styled from 'styled-components'
import { Box, Flex } from '@rebass/grid'

import { scale } from '../utils/typography'
import { useRotation } from './rotation-hook'
import Badge from './badge'

let Img = styled.img`
  width: 100%;
  object-fit: cover;

  /* trim black space on high youtube thumbnail  */
  @media screen and (min-width: 40em) {
    height: 178px;
  }
`

let VideoCard = ({ video: { id, snippet }, className }) => {
  let rotation = useRotation()
  let link = `https://www.youtube.com/watch?v=${id}`
  let { medium, high, maxres } = snippet.thumbnails

  return (
    <section className={className}>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <Img
          {...rotation}
          src={medium.url}
          srcSet={`${medium.url}, ${high.url} 1.5x, ${maxres.url} 3x`}
          alt={snippet.title}
        />
      </a>

      <h3 style={scale(0.1)}>
        <a href={link}>{snippet.title}</a>
      </h3>

      {snippet.tags && (
        <Flex as="ul" flexWrap="wrap" mx="-5px" css={{ listStyle: 'none' }}>
          {snippet.tags.map(t => (
            <Box as="li" key={t} m="5px 2px" fontSize="12px">
              <Badge>#{t}</Badge>
            </Box>
          ))}
        </Flex>
      )}
    </section>
  )
}

cold(VideoCard)

export default VideoCard
