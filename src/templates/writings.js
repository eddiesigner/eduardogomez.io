import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { MetaData } from '../components/common/meta'
import {
  Layout,
  Wrapper,
  MastHead,
  Heading,
  Subheading,
  PostEntry,
  Pagination,
  EmptyMessage,
} from '../components/common'

/**
 * Writings page (blog listing page)
 *
 * Loads all non-featured posts from Ghost and uses pagination to navigate through them.
 * The number of posts that should appear per page can be setup
 * in /utils/siteConfig.js under `postsPerPage`.
 *
 */
const Writings = ({ data, location, pageContext }) => {
  const posts = data.allGhostPost.edges

  return (
    <>
      <MetaData location={location} title="Writings" />
      <Layout location={location}>
        <Wrapper smaller>
          <MastHead>
            <Heading type="h1" centered>
              Writings
            </Heading>
            <Subheading centered>
              Here in my blog I write about frontend development and topics
              related to UI/UX design, occasionally I also write about personal
              stuff.
            </Subheading>
          </MastHead>
          <section>
            {posts.length > 0 ? (
              posts.map(({ node }, index) => {
                const isLast = index === posts.length - 1
                return <PostEntry key={node.id} entry={node} isLast={isLast} />
              })
            ) : (
              <EmptyMessage>
                There are no publications at this time, please check back later
                😅
              </EmptyMessage>
            )}
          </section>
          <Pagination pageContext={pageContext} />
        </Wrapper>
      </Layout>
    </>
  )
}

Writings.propTypes = {
  data: PropTypes.shape({
    allGhostPost: PropTypes.object.isRequired,
  }).isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
  pageContext: PropTypes.object,
}

export default Writings

// This page query loads all non-featured posts sorted descending by published date
// The `limit` and `skip` values are used for pagination
export const pageQuery = graphql`
  query GhostWritingsQuery($limit: Int!, $skip: Int!) {
    allGhostPost(
      sort: { order: DESC, fields: [published_at] }
      filter: { featured: { eq: false } }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          ...GhostPostListingFields
        }
      }
    }
  }
`
