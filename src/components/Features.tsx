import React from 'react'
import { GatsbyImageProps } from 'gatsby-image'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

type ImageSharp = {
  childImageSharp: GatsbyImageProps
}

type FeatureGridProps = {
  gridItems: {
    image?: ImageSharp | string
    text: string
  }[]
}

const FeatureGrid: React.SFC<FeatureGridProps> = ({ gridItems }) => (
  <div className="columns is-multiline">
    {gridItems.map(item => (
      <div key={item.text} className="column is-6">
        <section className="section">
          <div className="has-text-centered">
            <div
              style={{
                width: '240px',
                display: 'inline-block'
              }}
            >
              <PreviewCompatibleImage imageInfo={item} />
            </div>
          </div>
          <p>{item.text}</p>
        </section>
      </div>
    ))}
  </div>
)
export default FeatureGrid
