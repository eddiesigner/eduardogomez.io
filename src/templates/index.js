import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import { mediaQueries } from '../utils/mediaQueries'
import { MetaData } from '../components/common/meta'
import {
  Layout,
  Wrapper,
  Button,
  MastHead,
  Heading,
  Subheading,
} from '../components/common'
import { BigText, Label, WorkEntry } from '../components/home'

/**
 * Main index page (home page)
 *
 * Loads all featured posts from Ghost and uses pagination to navigate through them.
 * The number of posts that should appear per page can be setup
 * in /utils/siteConfig.js under `postsPerPage`.
 *
 */
const Index = ({ data, location }) => {
  const posts = data.allGhostPost.edges
  const settings = data.allGhostSettings.edges[0].node

  return (
    <>
      <MetaData location={location} title="Home" />
      <Layout location={location} isHome>
        <Wrapper>
          <MastHead inHome>
            <Title>
              <BigText gradient>{settings.title}</BigText>
              <BigText>Frontend Engineer.</BigText>
              <BigText>Designer.</BigText>
            </Title>
            <Subheading bigger>{settings.description}</Subheading>
          </MastHead>
          <Work>
            <Label>Featured work</Label>
            {posts.map(({ node }, index) => {
              const isOdd = index % 2 !== 0
              return <WorkEntry key={node.id} entry={node} isOdd={isOdd} />
            })}
          </Work>
        </Wrapper>
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

const Title = styled.h1`
  margin: 0 0 2.5rem;

  @media ${mediaQueries.medium} {
    margin-bottom: 3.125rem;
  }
`

const Work = styled.section`
  margin-bottom: 6.25rem;

  @media ${mediaQueries.medium} {
    margin-bottom: 9.375rem;
  }
`

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
    allGhostSettings: PropTypes.object.isRequired,
  }).isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
  pageContext: PropTypes.object,
}

export default Index

// This page query loads all featured posts sorted descending by published date
// The `limit` and `skip` values are used for pagination
export const pageQuery = graphql`
  query GhostIndexQuery($limit: Int!, $skip: Int!) {
    allGhostPost(
      sort: { order: DESC, fields: [published_at] }
      filter: { featured: { eq: true } }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          ...GhostPostListingFields
        }
      }
    }
    allGhostSettings {
      edges {
        node {
          title
          description
        }
      }
    }
  }
`
