import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { mediaQueries } from '../../utils/mediaQueries'

const Wrapper = ({ smaller, children }) => (
  <Container smaller={smaller}>{children}</Container>
)

const Container = styled.div`
  padding: 0 1.25rem;
  width: 100%;
  max-width: ${props => (props.smaller ? `38.75rem` : `72.5rem`)};
  margin: 0 auto;

  @media ${mediaQueries.medium} {
    padding: ${props => (props.smaller ? `0` : `0 2.5rem`)};
  }

  @media ${mediaQueries.extraLarge} {
    padding: 0;
  }
`

Wrapper.propTypes = {
  smaller: PropTypes.bool,
}

export default Wrapper
