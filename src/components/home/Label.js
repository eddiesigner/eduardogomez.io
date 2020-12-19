import React from 'react'
import styled from 'styled-components'
import { mediaQueries } from '../../utils/mediaQueries'

const Label = ({ children }) => <Text>{children}</Text>

const Text = styled.span`
  display: block;
  color: var(--color-foreground);
  line-height: 1.3;
  text-transform: uppercase;
  font-size: 0.875rem;
  font-weight: 600;
  margin-bottom: 2.5rem;

  @media ${mediaQueries.medium} {
    font-size: 1rem;
    margin-bottom: 3.125rem;
  }
`

export default Label
