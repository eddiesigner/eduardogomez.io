import React from 'react'
import PropTypes from 'prop-types'
import InnerHTML from 'dangerously-set-html-content'

const PostContent = ({ html }) => (
  <section className="post-full-content">
    <InnerHTML className="content-body load-external-scripts" html={html} />
  </section>
)

PostContent.propTypes = {
  html: PropTypes.string.isRequired,
}

export default PostContent
