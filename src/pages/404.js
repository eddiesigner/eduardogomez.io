import React from 'react'
import PropTypes from 'prop-types'
import { MetaData } from '../components/common/meta'
import {
  Layout,
  Wrapper,
  MastHead,
  Heading,
  Subheading,
} from '../components/common'

/**
 * 404 page
 *
 */
const NotFound = ({ location }) => (
  <>
    <MetaData location={location} title="Page Not Found" />
    <Layout location={location}>
      <Wrapper smaller>
        <MastHead>
          <Heading type="h1">404</Heading>
          <Subheading>
            Unfortunately the page you were looking for could not be found.
          </Subheading>
        </MastHead>
      </Wrapper>
    </Layout>
  </>
)

NotFound.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
}

export default NotFound
