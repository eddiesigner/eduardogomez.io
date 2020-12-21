import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { mediaQueries } from '../../utils/mediaQueries'

const Button = ({ url, disableKeyboardNavigation, children }) => (
  <Link
    href={url}
    aria-hidden={disableKeyboardNavigation}
    tabIndex={disableKeyboardNavigation ? `-1` : `0`}
  >
    <Label>{children}</Label>
  </Link>
)

const Link = styled.a`
  display: inline-block;
  position: relative;
  text-align: center;
  text-decoration: none;
  min-width: 8.75rem;
  padding: 0.875rem 2.1875rem;
  border-radius: 0.125rem;
  transition: transform 0.25s cubic-bezier(0.02, 0.01, 0.47, 1);

  @media ${mediaQueries.medium} {
    font-size: 1rem;
    min-width: 9.375rem;
    padding: 0.9375rem 2.5rem;
  }

  &:hover {
    transform: translateY(-0.125rem);

    &:before {
      opacity: 1;
    }
  }

  &:focus {
    outline: 0;
    box-shadow: 0 0 0 0.1875rem var(--color-focus), 0 0 0 transparent;
  }

  &:before {
    content: '';
    position: absolute;
    top: 0.625rem;
    right: 0.625rem;
    bottom: 0;
    left: 0.625rem;
    opacity: 0;
    z-index: -1;
    box-shadow: 0 0.625rem 0.9375rem var(--color-button-shadow);
    transition: opacity 0.25s cubic-bezier(0.02, 0.01, 0.47, 1);
  }

  &:after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    border-radius: 0.125rem;
    background-color: var(--color-foreground);
  }
`

const Label = styled.span`
  position: relative;
  color: var(--color-background);
  line-height: 1.3;
  font-size: 0.9375rem;
  font-weight: 600;
  z-index: 1;
`

Button.propTypes = {
  url: PropTypes.string.isRequired,
  disableKeyboardNavigation: PropTypes.bool,
}

export default Button
