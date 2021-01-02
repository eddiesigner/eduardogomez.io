import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
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
} from '../components/post'

/**
 * Post styles
 */
import '../styles/post.css'

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
            {post.html && <PostContent html={post.html} />}
          </article>
        </Wrapper>
      </Layout>
    </>
  )
}

Post.propTypes = {
  data: PropTypes.shape({
    ghostPost: PropTypes.shape({
      codeinjection_styles: PropTypes.object,
      title: PropTypes.string.isRequired,
      html: PropTypes.string.isRequired,
      feature_image: PropTypes.string,
      primary_tag: PropTypes.object,
      published_at_pretty: PropTypes.string.isRequired,
      custom_excerpt: PropTypes.string,
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
