import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { mediaQueries } from '../../utils/mediaQueries'

const Button = ({ url, children }) => <Link href={url}>{children}</Link>

const Link = styled.a`
  color: var(--color-background);
  line-height: 1.3;
  text-align: center;
  text-decoration: none;
  font-size: 0.9375rem;
  font-weight: 600;
  padding: 0.9375rem 2.1875rem;
  border-radius: 0.125rem;
  background-color: var(--color-foreground);

  @media ${mediaQueries.medium} {
    font-size: 1rem;
    padding: 0.9375rem 2.5rem;
  }
`

Button.propTypes = {
  url: PropTypes.string.isRequired,
}

export default Button
