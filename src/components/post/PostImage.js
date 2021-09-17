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
    srcSet[2] = featureImage.replace(
      `/content/images/`,
      `/content/images/size/w2000/`
    )
  }

  return (
    <Image
      sizes="
        (max-width: 48rem) 37.5rem,
        (max-width: 75rem) 62.5rem,
        125rem
      "
      srcset={
        srcSet.length > 0
          ? `${srcSet[0]} 600w,
          ${srcSet[1]} 1000w,
          ${srcSet[2]} 2000w`
          : ``
      }
      src={srcSet.length > 0 ? srcSet[1] : featureImage}
      alt=""
      width="600"
      height="420"
    />
  )
}

const Image = styled(LazyImage)`
  position: relative;
  left: 50%;
  right: 50%;
  width: 100vw;
  margin-left: -50vw;
  margin-right: -50vw;
  margin-bottom: 2.5rem;
  height: auto;

  @media ${mediaQueries.medium} {
    width: 90vw;
    margin-left: -45vw;
    margin-right: -45vw;
    margin-bottom: 3.125rem;
  }

  @media ${mediaQueries.largest} {
    width: 80vw;
    margin-left: -40vw;
    margin-right: -40vw;
  }
`

PostImage.propTypes = {
  featureImage: PropTypes.string.isRequired,
}

export default PostImage
