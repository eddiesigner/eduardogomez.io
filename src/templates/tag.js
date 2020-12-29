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
} from '../components/common'

/**
 * Tag page
 *
 * Loads all tag posts from Ghost and uses pagination to navigate through them.
 * The number of posts that should appear per page can be setup
 * in /utils/siteConfig.js under `postsPerPage`.
 *
 */
const Tag = ({ data, location, pageContext }) => {
  const tag = data.ghostTag
  const posts = data.allGhostPost.edges

  return (
    <>
      <MetaData data={data} location={location} type="series" />
      <Layout location={location}>
        <Wrapper smaller>
          <MastHead>
            <Heading type="h1" centered>
              {tag.name}
            </Heading>
            {tag.description ? (
              <Subheading centered>{tag.description}</Subheading>
            ) : null}
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

Tag.propTypes = {
  data: PropTypes.shape({
    ghostTag: PropTypes.shape({
      name: PropTypes.string.isRequired,
      description: PropTypes.string,
    }),
    allGhostPost: PropTypes.object.isRequired,
  }).isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
  pageContext: PropTypes.object,
}

export default Tag

// This page query loads all tag posts sorted descending by published date
// The `limit` and `skip` values are used for pagination
export const pageQuery = graphql`
  query GhostTagQuery($slug: String!, $limit: Int!, $skip: Int!) {
    ghostTag(slug: { eq: $slug }) {
      ...GhostTagFields
    }
    allGhostPost(
      sort: { order: DESC, fields: [published_at] }
      filter: { tags: { elemMatch: { slug: { eq: $slug } } } }
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
