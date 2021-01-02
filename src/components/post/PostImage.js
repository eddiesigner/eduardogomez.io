import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { mediaQueries } from '../../utils/mediaQueries'
import { LazyImage } from '../common'

const PostImage = ({ featureImage }) => {
  const srcSet = []

  if (featureImage.indexOf(`/content/images/`) > -1) {
    srcSet[0] = featureImage.replace(
      `/content/images/`,
      `/content/images/size/w600/`
    )
    srcSet[1] = featureImage.replace(
      `/content/images/`,
      `/content/images/size/w1000/`
    )
  }

  return (
    <Image
      sizes="(max-width: 48rem) 37.5rem, 62.5rem"
      srcset={srcSet.length > 0 ? `${srcSet[0]} 600w, ${srcSet[1]} 1000w` : ``}
      src={srcSet.length > 0 ? srcSet[0] : featureImage}
      alt=""
      width="600"
      height="420"
    />
  )
}

const Image = styled(LazyImage)`
  width: calc(100% + 2.5rem);
  height: auto;
  margin: 0 -1.25rem 2.5rem;

  @media ${mediaQueries.medium} {
    width: 100%;
    margin: 0 0 3.125rem;
  }
`

PostImage.propTypes = {
  featureImage: PropTypes.string.isRequired,
}

export default PostImage
