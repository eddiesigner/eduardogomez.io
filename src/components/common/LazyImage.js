import React from 'react'
import PropTypes from 'prop-types'
import LazyLoad from 'vanilla-lazyload'

if (!document.lazyLoadInstance) {
  document.lazyLoadInstance = new LazyLoad(`.lazy`)
}

export class LazyImage extends React.Component {
  componentDidMount() {
    document.lazyLoadInstance.update()
  }

  componentDidUpdate() {
    document.lazyLoadInstance.update()
  }

  render() {
    const { className, alt, src, srcset, sizes, width, height } = this.props
    return (
      <img
        alt={alt}
        className={`${className} lazy`}
        data-src={src}
        data-srcset={srcset}
        data-sizes={sizes}
        width={width}
        height={height}
      />
    )
  }
}

LazyImage.propTypes = {
  className: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  srcset: PropTypes.string.isRequired,
  sizes: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
}

export default LazyImage
