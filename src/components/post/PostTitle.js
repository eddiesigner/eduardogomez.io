import React from 'react'
import styled from 'styled-components'
import { mediaQueries } from '../../utils/mediaQueries'

const PostTitle = ({ children }) => <Title>{children}</Title>

const Title = styled.h1`
  color: var(--color-foreground);
  line-height: 1.3;
  font-size: 2rem;
  font-weight: 700;
  margin: 0 0 1.25rem;

  @media ${mediaQueries.medium} {
    margin-bottom: 1.5625rem;
  }
`

export default PostTitle
