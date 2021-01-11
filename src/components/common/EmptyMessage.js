import React from 'react'
import styled from 'styled-components'
import { mediaQueries } from '../../utils/mediaQueries'

const EmptyMessage = ({ children }) => <Message>{children}</Message>

const Message = styled.p`
  color: var(--color-foreground);
  line-height: 1.7;
  text-align: center;
  font-size: 0.875rem;
  opacity: 0.8;
  width: 100%;
  max-width: 23.75rem;
  margin: 0 auto;

  @media ${mediaQueries.medium} {
    font-size: 1rem;
  }
`

export default EmptyMessage
