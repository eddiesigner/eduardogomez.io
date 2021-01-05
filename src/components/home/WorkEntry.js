import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { Button, LazyImage } from '../common'
import { mediaQueries } from '../../utils/mediaQueries'
import dotImage from '../../images/dot.png'

const WorkEntry = ({ entry, isOdd }) => {
  const url = `/${entry.slug}/`
  const imageUrl = entry.feature_image
  const srcSet = []

  if (imageUrl && imageUrl.indexOf(`/content/images/`) > -1) {
    srcSet[0] = imageUrl.replace(
      `/content/images/`,
      `/content/images/size/w600/`
    )
    srcSet[1] = imageUrl.replace(
      `/content/images/`,
      `/content/images/size/w1000/`
    )
  }

  return (
    <Article>
      {entry.feature_image && (
        <ImageContainer isOdd={isOdd}>
          <ImageLink to={url} aria-hidden="true" tabIndex="-1">
            <Image
              sizes="(max-width: 48rem) 37.5rem, 62.5rem"
              srcset={
                srcSet.length > 0 ? `${srcSet[0]} 600w, ${srcSet[1]} 1000w` : ``
              }
              src={srcSet.length > 0 ? srcSet[0] : imageUrl}
              alt=""
              width="600"
              height="420"
            />
          </ImageLink>
        </ImageContainer>
      )}
      <InfoContainer isOdd={isOdd}>
        <TitleLink to={url}>
          <Title>{entry.title}</Title>
        </TitleLink>
        <Excerpt>{entry.custom_excerpt}</Excerpt>
        <Button url={url} disableKeyboardNavigation>
          See Project
        </Button>
      </InfoContainer>
    </Article>
  )
}

const Article = styled.article`
  margin-bottom: 4.6875rem;

  @media ${mediaQueries.large} {
    display: flex;
    justify-content: space-between;
    margin-bottom: 9.375rem;
  }
`

const ImageContainer = styled.div`
  position: relative;
  padding-top: 1.25rem;
  margin: 0 -0.3125rem 2.5rem;

  @media ${mediaQueries.large} {
    flex: 1 0 57%;
    order: ${props => (props.isOdd ? `2` : `1`)};
    padding-top: 2.8125rem;
    padding-left: ${props => (props.isOdd ? `2.8125rem` : `0`)};
    padding-right: ${props => (props.isOdd ? `0` : `2.8125rem`)};
    margin: ${props => (props.isOdd ? `0 -0.3125rem 0 0` : `0 0 0 -0.3125rem`)};
  }

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0.9375rem;
    right: 0.9375rem;
    height: 3.125rem;
    opacity: var(--opacity-dots);
    background-repeat: repeat;
    background-size: 0.3125rem;
    background-image: url(${dotImage});
    z-index: 0;

    @media ${mediaQueries.large} {
      left: ${props => (props.isOdd ? `0` : `auto`)};
      right: ${props => (props.isOdd ? `auto` : `0`)};
      width: 15.625rem;
      height: 9.375rem;
    }
  }
`

const ImageLink = styled(Link)`
  display: block;
  position: relative;
  padding: 0.3125rem;
  background-color: var(--color-background);
  z-index: 2;
`

const Image = styled(LazyImage)`
  width: 100%;
  height: auto;
`

const InfoContainer = styled.div`
  position: relative;

  @media ${mediaQueries.medium} {
    max-width: 80%;
  }

  @media ${mediaQueries.large} {
    padding-top: 2.8125rem;
    order: ${props => (props.isOdd ? `1` : `2`)};
    padding-left: ${props => (props.isOdd ? `0` : `3.125rem`)};
    padding-right: ${props => (props.isOdd ? `3.125rem` : `0`)};
  }
`

const TitleLink = styled(Link)`
  display: inline-block;
  text-decoration: none;
  margin-bottom: 1.5625rem;
  transition: opacity 0.2s linear;

  &:hover {
    opacity: 0.7;
  }
`

const Title = styled.h2`
  color: var(--color-foreground);
  line-height: 1.3;
  font-size: 2rem;
  font-weight: 700;
  margin: 0;

  @media ${mediaQueries.large} {
    font-size: 2.625rem;
  }
`

const Excerpt = styled.p`
  color: var(--color-text);
  line-height: 1.6;
  font-size: 0.9375rem;
  font-weight: 500;
  margin-bottom: 2.5rem;

  @media ${mediaQueries.medium} {
    font-size: 1rem;
    margin-bottom: 3.125rem;
  }
`

WorkEntry.propTypes = {
  entry: PropTypes.shape({
    slug: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    feature_image: PropTypes.string,
    custom_excerpt: PropTypes.string,
  }).isRequired,
  isOdd: PropTypes.bool,
}

export default WorkEntry
