import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { mediaQueries } from '../../utils/mediaQueries'

const MastHead = ({ inHome, children }) => (
  <Container inHome={inHome}>{children}</Container>
)

const Container = styled.section`
  margin-bottom: ${props => (props.inHome ? `6.25rem` : `4.6875rem`)};

  @media ${mediaQueries.medium} {
    max-width: ${props => (props.inHome ? `48.75rem` : `100%`)};
    margin-bottom: ${props => (props.inHome ? `9.375rem` : `6.25rem`)};
  }
`

MastHead.propTypes = {
  inHome: PropTypes.bool,
}

export default MastHead
