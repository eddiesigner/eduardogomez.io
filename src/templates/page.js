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
 * Single page view (/:slug)
 *
 * This file renders a single page and loads all the content.
 *
 */
const Page = ({ data, location }) => {
  const post = data.ghostPage

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
              <MetaContainer publishedDate={post.published_at_pretty} />
            </PostHeader>
            {post.feature_image && (
              <PostImage featureImage={post.feature_image} />
            )}
            {post.html && <PostContent html={post.childHtmlRehype.html} />}
          </article>
        </Wrapper>
      </Layout>
    </>
  )
}

Page.propTypes = {
  data: PropTypes.shape({
    ghostPage: PropTypes.shape({
      codeinjection_styles: PropTypes.object,
      title: PropTypes.string.isRequired,
      html: PropTypes.string.isRequired,
      feature_image: PropTypes.string,
      published_at_pretty: PropTypes.string.isRequired,
      custom_excerpt: PropTypes.string,
      childHtmlRehype: PropTypes.shape({
        html: PropTypes.string.isRequired,
      }),
    }).isRequired,
  }).isRequired,
  location: PropTypes.object.isRequired,
}

export default Page

export const postQuery = graphql`
  query($slug: String!) {
    ghostPage(slug: { eq: $slug }) {
      ...GhostPageFields
    }
  }
`
