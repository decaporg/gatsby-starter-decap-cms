import React from 'react';

export default ({ data }) => (
  <div className="columns">
    {data.map(price => (
      <div key={price.plan} className="column">
        <section className="section">
          <h4 className="has-text-centered has-text-weight-semibold">{price.plan}</h4>
          <h2 className="is-size-1 has-text-weight-bold has-text-primary has-text-centered">${price.price}</h2>
          <p className="has-text-weight-semibold">{price.description}</p>
          <ul>
            {price.items.map(item => (
              <li key={item} className="is-size-5">
                {item}
              </li>
            ))}
          </ul>
        </section>
      </div>
    ))}
  </div>
);
