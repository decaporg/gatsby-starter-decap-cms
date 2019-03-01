import React from 'react'
import Img, { GatsbyImageProps } from 'gatsby-image'

type ImageSharp = {
  childImageSharp: GatsbyImageProps
}

type PreviewCompatibleImageProps = {
  imageInfo: {
    alt?: string
    childImageSharp?: GatsbyImageProps
    image?: ImageSharp | string
    style?: object
  }
}
const PreviewCompatibleImage: React.FC<PreviewCompatibleImageProps> = ({
  imageInfo
}) => {
  const imageStyle = { borderRadius: '5px' }
  const { alt = '', childImageSharp, image } = imageInfo
  if (!!image && typeof image !== 'string') {
    return <Img style={imageStyle} fluid={image.childImageSharp.fluid} alt={alt} />
  }
  if (!!childImageSharp) {
    return <Img style={imageStyle} fluid={childImageSharp.fluid} alt={alt} />
  }
  if (!!image && typeof image === 'string')
    return <img style={imageStyle} src={image} alt={alt} />
  return null
}
export default PreviewCompatibleImage
