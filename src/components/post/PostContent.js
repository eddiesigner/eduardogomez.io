import React from 'react'
import PropTypes from 'prop-types'

const PostContent = ({ html }) => (
  <section className="post-full-content">
    <div
      className="content-body load-external-scripts"
      dangerouslySetInnerHTML={{ __html: html }}
    ></div>
  </section>
)

PostContent.propTypes = {
  html: PropTypes.string.isRequired,
}

export default PostContent
