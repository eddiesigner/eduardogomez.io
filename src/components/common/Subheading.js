import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { mediaQueries } from '../../utils/mediaQueries'

const Heading = ({ centered, children }) => (
  <Text centered={centered}>{children}</Text>
)

const Text = styled.p`
  color: var(--color-secondary);
  line-height: 1.7;
  text-align: ${props => (props.centered ? `center` : `left`)};
  font-size: 1rem;
  font-weight: 500;
  margin: 0;

  @media ${mediaQueries.medium} {
    line-height: 1.6;
    font-size: 1.125rem;
  }
`

Heading.propTypes = {
  centered: PropTypes.bool,
}

export default Heading
