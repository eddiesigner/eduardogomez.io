import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { mediaQueries } from '../../utils/mediaQueries'

const MetaContainer = ({ tag, publishedDate }) => (
  <Container>
    {tag && <Tag to={`/tag/${tag.slug}`}>{tag.name}</Tag>}
    {tag && <Label>— &nbsp;</Label>}
    <Label>{publishedDate}</Label>
  </Container>
)

const Container = styled.div`
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

const Label = styled.span`
  display: inline-block;
  color: var(--color-text);
  line-height: 1.3;
  font-size: 0.875rem;
`

MetaContainer.propTypes = {
  tag: PropTypes.shape({
    slug: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }),
  publishedDate: PropTypes.string.isRequired,
}

export default MetaContainer
