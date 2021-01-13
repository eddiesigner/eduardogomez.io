import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { mediaQueries } from '../../utils/mediaQueries'

const PostTagsList = ({ tags }) => {
  if (tags.length > 0) {
    return (
      <Container>
        <TagList>
          {tags.map(tag => (
            <TagItem key={tag.slug}>
              <TagLink to={`/tag/${tag.slug}`}>{tag.name}</TagLink>
            </TagItem>
          ))}
        </TagList>
      </Container>
    )
  }

  return null
}

const Container = styled.div`
  margin-bottom: 1.875rem;
`

const TagList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  margin: 0;
`

const TagItem = styled.li`
  display: inline-block;
  margin: 0 0.9375rem 0.9375rem 0;
`

const TagLink = styled(Link)`
  display: block;
  color: var(--color-foreground);
  text-decoration: none;
  line-height: 1.3;
  font-size: 0.8125rem;
  font-weight: 500;
  padding: 0.25rem 0.5rem;
  border-radius: 0.125rem;
  border: 0.0625rem solid var(--color-border);
  transition: opacity 0.2s linear;

  &:hover {
    opacity: 0.7;
  }

  @media ${mediaQueries.medium} {
    font-size: 0.9375rem;
  }
`

PostTagsList.propTypes = {
  tags: PropTypes.array.isRequired,
}

export default PostTagsList
