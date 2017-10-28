import React from 'react';

const FeatureGrid = ({ gridItems }) => (
  <div className="columns is-multiline">
    {gridItems.map(item => (
      <div key={item.image} className="column is-6">
        <section className="section">
          <p>
            <img className="image is-64x64" alt="" src={item.image} />
          </p>
          <p>{item.text}</p>
        </section>
      </div>
    ))}
  </div>
);

export default FeatureGrid;
