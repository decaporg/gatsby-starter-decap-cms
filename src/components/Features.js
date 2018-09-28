import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'

const FeatureGrid = ({ gridItems }) => (
  <div className="columns is-multiline">
    {gridItems.map(item => (
      <div key={item.image} className="column is-6">
        <section className="section">
          <p className="has-text-centered">
            <div style={{
              width: '240px',
              display: 'inline-block',
            }}>
              <Img alt="" fluid={item.image.childImageSharp.fluid} />
            </div>
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
