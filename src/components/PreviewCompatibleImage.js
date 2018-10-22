import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'

const PreviewCompatibleImage = ({ imageInfo }) => {
  const imageStyle = { borderRadius: '5px' }
  const { alt, childImageSharp, image } = imageInfo || {}

  if (!!image && !!image.childImageSharp) {
    return (
      <Img
        style={imageStyle}
        fluid={image.childImageSharp.fluid}
        alt={!!alt ? alt : ''}
      />
    )
  }

  if (!!childImageSharp) {
    return (
      <Img
        style={imageStyle}
        fluid={childImageSharp.fluid}
        alt={!!alt ? alt : ''}
      />
    )
  }

  if (!!image && typeof image === 'string')
    return <img style={imageStyle} src={image} alt={!!alt ? alt : ''} />

  return null
}

PreviewCompatibleImage.propTypes = {
  imageInfo: PropTypes.object,
}

export default PreviewCompatibleImage
