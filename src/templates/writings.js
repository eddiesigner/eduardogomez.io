import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import { mediaQueries } from '../utils/mediaQueries'
import { MetaData } from '../components/common/meta'
import {
  Layout,
  Wrapper,
  Heading,
  Subheading,
  PostEntry,
  Pagination,
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
      <MetaData location={location} />
      <Layout location={location}>
        <Wrapper smaller>
          <MastHead>
            <Heading type="h1" centered>
              Writings
            </Heading>
            <Subheading centered>
              Here I write about stuff related to frontend development and
              design, from time to time I also write about some personal
              aspects.
            </Subheading>
          </MastHead>
          <section>
            {posts.map(({ node }, index) => {
              const isLast = index === posts.length - 1
              return <PostEntry key={node.id} entry={node} isLast={isLast} />
            })}
          </section>
          <Pagination pageContext={pageContext} />
        </Wrapper>
      </Layout>
    </>
  )
}

const MastHead = styled.section`
  margin-bottom: 4.6875rem;

  @media ${mediaQueries.medium} {
    margin-bottom: 6.25rem;
  }
`

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
