import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { mediaQueries } from '../../utils/mediaQueries'

const PostHeader = ({ hasImage, children }) => (
  <Container hasImage={hasImage}>{children}</Container>
)

const Container = styled.header`
  margin-bottom: ${props => (props.hasImage ? `2.5rem` : `3.75rem`)};

  @media ${mediaQueries.medium} {
    margin-bottom: ${props => (props.hasImage ? `3.125rem` : `4.6875rem`)};
  }
`

PostHeader.propTypes = {
  hasImage: PropTypes.bool,
}

export default PostHeader
