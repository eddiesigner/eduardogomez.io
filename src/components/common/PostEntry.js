import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { mediaQueries } from '../../utils/mediaQueries'
import { MetaContainer } from './'

const PostEntry = ({ entry, isLast }) => {
  const url = `/${entry.slug}/`

  return (
    <Article isLast={isLast}>
      <TitleLink to={url}>
        <Title>{entry.title}</Title>
      </TitleLink>
      <MetaContainer
        tag={entry.primary_tag}
        publishedDate={entry.published_at_pretty}
      />
    </Article>
  )
}

const Article = styled.article`
  margin-bottom: ${props => (props.isLast ? `0` : `3.125rem`)};
`

const TitleLink = styled(Link)`
  display: inline-block;
  text-decoration: none;
  margin-bottom: 1.25rem;
  transition: opacity 0.2s linear;

  &:hover {
    opacity: 0.7;
  }
`

const Title = styled.h2`
  color: var(--color-foreground);
  line-height: 1.3;
  font-size: 1.3125rem;
  font-weight: 700;
  margin: 0;

  @media ${mediaQueries.medium} {
    line-height: 1.2;
    font-size: 1.625rem;
  }
`

PostEntry.propTypes = {
  entry: PropTypes.shape({
    slug: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    primary_tag: PropTypes.object,
    published_at_pretty: PropTypes.string.isRequired,
  }).isRequired,
  isLast: PropTypes.bool,
}

export default PostEntry
