import React from 'react'
import styled from 'styled-components'
import { mediaQueries } from '../../utils/mediaQueries'

const Wrapper = ({ children }) => <Container>{children}</Container>

const Container = styled.div`
  padding: 0 1.25rem;
  margin: 0 auto;

  @media ${mediaQueries.medium} {
    padding: 0 2.5rem;
    max-width: 72.5rem;
  }

  @media ${mediaQueries.extraLarge} {
    padding: 0;
  }
`

export default Wrapper
