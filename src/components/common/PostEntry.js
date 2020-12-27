import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { mediaQueries } from '../../utils/mediaQueries'

const PostEntry = ({ entry, isLast }) => {
  const url = `/${entry.slug}/`

  return (
    <Article isLast={isLast}>
      <TitleLink to={url}>
        <Title>{entry.title}</Title>
      </TitleLink>
      <MetaContainer>
        {entry.primary_tag && (
          <Tag to={`/tag/${entry.primary_tag.slug}`}>
            {entry.primary_tag.name}
          </Tag>
        )}
        <DateLabel>— {entry.published_at_pretty}</DateLabel>
      </MetaContainer>
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

const MetaContainer = styled.div`
  display: flex;
  align-items: center;
`

const Tag = styled(Link)`
  display: inline-block;
  color: var(--color-foreground);
  line-height: 1.3;
  text-decoration: none;
  text-transform: capitalize;
  font-size: 0.875rem;
  font-weight: 500;
  margin-right: 1.5625rem;
  transition: opacity 0.2s linear;

  @media ${mediaQueries.medium} {
    font-size: 1rem;
  }

  &:hover {
    opacity: 0.7;
  }
`

const DateLabel = styled.span`
  display: inline-block;
  color: var(--color-text);
  line-height: 1.3;
  font-size: 0.875rem;
`

PostEntry.propTypes = {
  entry: PropTypes.object.isRequired,
  isLast: PropTypes.bool,
}

export default PostEntry
