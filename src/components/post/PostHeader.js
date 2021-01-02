import React from 'react'
import styled from 'styled-components'
import { mediaQueries } from '../../utils/mediaQueries'

const PostHeader = ({ children }) => <Container>{children}</Container>

const Container = styled.header`
  margin-bottom: 2.5rem;

  @media ${mediaQueries.medium} {
    margin-bottom: 3.125rem;
  }
`

export default PostHeader
