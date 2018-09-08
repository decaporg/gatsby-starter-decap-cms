import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'

const FeatureGrid = ({ gridItems }) => (
  <div className="columns is-multiline">
    {gridItems.map(item => (
      <div key={item.image.childImageSharp.sizes.src} className="column is-6">
        <section className="section">
          <p className="has-text-centered">
            <Img alt="" sizes={item.image.childImageSharp.sizes} />
          </p>
          <p>{item.text}</p>
        </section>
      </div>
    ))}
  </div>
)

FeatureGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.object,
      text: PropTypes.string,
    })
  ),
}

export default FeatureGrid
