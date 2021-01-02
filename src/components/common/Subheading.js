import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { mediaQueries } from '../../utils/mediaQueries'

const Heading = ({ centered, bigger, inPost, children }) => (
  <Text centered={centered} bigger={bigger} inPost={inPost}>
    {children}
  </Text>
)

const Text = styled.p`
  color: var(--color-secondary);
  line-height: 1.7;
  text-align: ${props => (props.centered ? `center` : `left`)};
  font-size: ${props => (props.bigger ? `1.125rem` : `1rem`)};
  font-weight: 500;
  max-width: 32.5rem;
  margin: ${props => (props.inPost ? `0 0 1.5625rem` : `0`)};

  @media ${mediaQueries.medium} {
    line-height: 1.6;
    font-size: ${props => (props.bigger ? `1.25rem` : `1.125rem`)};
    max-width: 100%;
  }
`

Heading.propTypes = {
  centered: PropTypes.bool,
  bigger: PropTypes.bool,
  inPost: PropTypes.bool,
}

export default Heading
