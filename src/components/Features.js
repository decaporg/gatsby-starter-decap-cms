import React from 'react';

const FeatureGrid = ({ gridItems }) => (
  <div className="columns is-multiline">
    {gridItems.map(item => (
      <div key={item.image.childImageSharp.resolutions.src} className="column is-6">
        <section className="section">
          <p className="has-text-centered">
            <img alt="" src={item.image.childImageSharp.resolutions.src} />
          </p>
          <p>{item.text}</p>
        </section>
      </div>
    ))}
  </div>
);

export default FeatureGrid;
