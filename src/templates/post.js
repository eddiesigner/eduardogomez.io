import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import { Helmet } from 'react-helmet'
import { mediaQueries } from '../utils/mediaQueries'
import { MetaData } from '../components/common/meta'
import {
  Layout,
  Wrapper,
  Subheading,
  MetaContainer,
} from '../components/common'
import {
  PostHeader,
  PostTitle,
  PostImage,
  PostContent,
  PostTagsList,
  PostShare,
} from '../components/post'

/**
 * Single post view (/:slug)
 *
 * This file renders a single post and loads all the content.
 *
 */
const Post = ({ data, location }) => {
  const post = data.ghostPost
  const canonicalUrl = `${data.site.siteMetadata.siteUrl}${location.pathname}`

  return (
    <>
      <MetaData data={data} location={location} type="article" />
      <Helmet>
        <link rel="stylesheet" type="text/css" href="/styles/post.css" />
        <style type="text/css">{`${post.codeinjection_styles}`}</style>
      </Helmet>
      <Layout location={location}>
        <Wrapper smaller>
          <ArticleContainer>
            <PostHeader hasImage={!!post.feature_image}>
              <PostTitle>{post.title}</PostTitle>
              {post.custom_excerpt && (
                <Subheading inPost>{post.custom_excerpt}</Subheading>
              )}
              <MetaContainer
                tag={post.primary_tag}
                publishedDate={post.published_at_pretty}
              />
            </PostHeader>
            {post.feature_image && (
              <PostImage featureImage={post.feature_image} />
            )}
            {post.html && <PostContent html={post.childHtmlRehype.html} />}
          </ArticleContainer>
          {post.tags.length > 1 && <PostTagsList tags={post.tags} />}
          <PostShare url={canonicalUrl} title={post.title} />
        </Wrapper>
      </Layout>
    </>
  )
}

const ArticleContainer = styled.article`
  margin-bottom: 3.125rem;

  @media ${mediaQueries.medium} {
    margin-bottom: 4.6875rem;
  }
`

Post.propTypes = {
  data: PropTypes.shape({
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        siteUrl: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
    ghostPost: PropTypes.shape({
      codeinjection_styles: PropTypes.object,
      title: PropTypes.string.isRequired,
      html: PropTypes.string.isRequired,
      feature_image: PropTypes.string,
      primary_tag: PropTypes.object,
      tags: PropTypes.array,
      published_at_pretty: PropTypes.string.isRequired,
      custom_excerpt: PropTypes.string,
      childHtmlRehype: PropTypes.shape({
        html: PropTypes.string.isRequired,
      }),
    }).isRequired,
  }).isRequired,
  location: PropTypes.object.isRequired,
}

export default Post

export const postQuery = graphql`
  query($slug: String!) {
    site {
      siteMetadata {
        siteUrl
      }
    }
    ghostPost(slug: { eq: $slug }) {
      ...GhostPostFields
    }
  }
`
