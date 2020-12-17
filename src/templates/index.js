import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import { mediaQueries } from '../utils/mediaQueries'

import { Layout } from '../components/common'
import { MetaData } from '../components/common/meta'
import { Wrapper } from '../components/common'
import { Button } from '../components/common'
import { Heading } from '../components/common'
import { Subheading } from '../components/common'

/**
 * Main index page (home page)
 *
 * Loads all posts from Ghost and uses pagination to navigate through them.
 * The number of posts that should appear per page can be setup
 * in /utils/siteConfig.js under `postsPerPage`.
 *
 */
const Index = ({ data, location }) => {
  const posts = data.allGhostPost.edges
  console.log(posts)

  return (
    <>
      <MetaData location={location} />
      <Layout location={location} isHome={true}>
        <Contact>
          <Wrapper smaller>
            <Heading type="h2" centered bigger>
              Get In Touch
            </Heading>
            <Subheading centered>
              If you are interested in contacting me, please do not hesitate to
              write me an email, I will try to answer as soon as possible.
            </Subheading>
            <ButtonContainer>
              <Button url="mailto:this.eduardo@gmail.com">Email Me</Button>
            </ButtonContainer>
          </Wrapper>
        </Contact>
      </Layout>
    </>
  )
}

const Contact = styled.section`
  padding: 4.6875rem 0;
  border-top: 0.0625rem solid var(--color-border);

  @media ${mediaQueries.medium} {
    padding: 6.25rem 0;
  }
`

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 2.5rem;

  @media ${mediaQueries.medium} {
    padding-top: 3.125rem;
  }
`

Index.propTypes = {
  data: PropTypes.shape({
    allGhostPost: PropTypes.object.isRequired,
  }).isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
  pageContext: PropTypes.object,
}

export default Index

// This page query loads all posts sorted descending by published date
// The `limit` and `skip` values are used for pagination
export const pageQuery = graphql`
  query GhostPostQuery($limit: Int!, $skip: Int!) {
    allGhostPost(
      sort: { order: DESC, fields: [published_at] }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          ...GhostPostFields
        }
      }
    }
  }
`
