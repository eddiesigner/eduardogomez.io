import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { mediaQueries } from '../../utils/mediaQueries'

const Heading = ({ type, centered, bigger, children }) => (
  <Text as={type} centered={centered} bigger={bigger}>
    {children}
  </Text>
)

const Text = styled.h1`
  color: var(--color-foreground);
  line-height: 1.3;
  text-align: ${props => (props.centered ? `center` : `left`)};
  font-size: ${props => (props.bigger ? `2.25rem` : `1.75rem`)};
  font-weight: 700;
  margin: 0 0 1.5625rem;

  @media ${mediaQueries.medium} {
    font-size: ${props => (props.bigger ? `3rem` : `2rem`)};
  }
`

Heading.propTypes = {
  type: PropTypes.oneOf([`h1`, `h2`, `h3`, `h4`, `h5`, `h6`]).isRequired,
  centered: PropTypes.bool,
  bigger: PropTypes.bool,
}

export default Heading
