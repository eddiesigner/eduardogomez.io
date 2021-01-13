import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { mediaQueries } from '../../utils/mediaQueries'

const PostShare = ({ url, title }) => {
  const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`
  const twitterUrl = `https://twitter.com/intent/tweet?text=${title}&url=${url}`

  return (
    <Container>
      <List>
        <ListItem>
          <ListLink href={facebookUrl} target="_blank" rel="noopener">
            Share on Facebook
          </ListLink>
        </ListItem>
        <ListItem aria-hidden="true">
          <Divider>•</Divider>
        </ListItem>
        <ListItem>
          <ListLink href={twitterUrl} target="_blank" rel="noopener">
            Share on Twitter
          </ListLink>
        </ListItem>
      </List>
    </Container>
  )
}

const Container = styled.div`
  position: relative;
`

const List = styled.ul`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  padding: 0;
  margin: 0;
`

const ListItem = styled.li`
  display: inline-block;
  margin-right: 0.9375rem;
`

const ListLink = styled.a`
  color: var(--color-foreground);
  text-decoration: none;
  line-height: 1.3;
  font-size: 0.8125rem;
  font-weight: 500;
  transition: opacity 0.2s linear;

  &:hover {
    opacity: 0.7;
  }

  @media ${mediaQueries.medium} {
    font-size: 0.9375rem;
  }
`

const Divider = styled.span`
  color: var(--color-border);
  line-height: 1.3;
  font-size: 0.9375rem;
  font-weight: 500;
`

PostShare.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string,
}

export default PostShare
