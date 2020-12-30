import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import styled from 'styled-components'
import { MetaData } from '../components/common/meta'
import { mediaQueries } from '../utils/mediaQueries'
import { Layout, Wrapper, MetaContainer } from '../components/common'

/**
 * Single post view (/:slug)
 *
 * This file renders a single post and loads all the content.
 *
 */
const Post = ({ data, location }) => {
  const post = data.ghostPost

  return (
    <>
      <MetaData data={data} location={location} type="article" />
      <Helmet>
        <style type="text/css">{`${post.codeinjection_styles}`}</style>
      </Helmet>
      <Layout location={location}>
        <Wrapper smaller>
          <article>
            <PostHeader>
              <Title>{post.title}</Title>
              <MetaContainer
                tag={post.primary_tag}
                publishedDate={post.published_at_pretty}
              />
            </PostHeader>
          </article>
        </Wrapper>
      </Layout>
    </>
  )
}

const PostHeader = styled.header`
  margin-bottom: 2.5rem;

  @media ${mediaQueries.medium} {
    margin-bottom: 3.125rem;
  }
`

const Title = styled.h1`
  color: var(--color-foreground);
  line-height: 1.3;
  font-size: 2rem;
  font-weight: 700;
  margin: 0 0 1.25rem;

  @media ${mediaQueries.medium} {
    margin-bottom: 1.5625rem;
  }
`

Post.propTypes = {
  data: PropTypes.shape({
    ghostPost: PropTypes.shape({
      codeinjection_styles: PropTypes.object,
      title: PropTypes.string.isRequired,
      html: PropTypes.string.isRequired,
      feature_image: PropTypes.string,
      primary_tag: PropTypes.object,
      published_at_pretty: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  location: PropTypes.object.isRequired,
}

export default Post

export const postQuery = graphql`
  query($slug: String!) {
    ghostPost(slug: { eq: $slug }) {
      ...GhostPostFields
    }
  }
`
