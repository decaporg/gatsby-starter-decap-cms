import React from 'react';
import Features from '../components/Features';
import Testimonials from '../components/Testimonials';
import Pricing from '../components/Pricing';

export default ({ data }) => {
  const { frontmatter } = data.markdownRemark;
  return (
    <section className="section section--gradient">
      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="content">
                <div
                  className="full-width-image-container margin-top-0"
                  style={{ backgroundImage: `url(${frontmatter.image})` }}
                >
                  <h2
                    className="has-text-weight-bold is-size-1"
                    style={{
                      boxShadow: '0.5rem 0 0 #f40, -0.5rem 0 0 #f40',
                      backgroundColor: '#f40',
                      color: 'white',
                      padding: '1rem'
                    }}
                  >
                    {frontmatter.title}
                  </h2>
                </div>
                <div className="columns">
                  <div className="column is-7">
                    <h3 className="has-text-weight-semibold is-size-2">{frontmatter.heading}</h3>
                    <p>{frontmatter.description}</p>
                  </div>
                </div>
                <Features gridItems={frontmatter.intro.blurbs} />
                <div className="columns">
                  <div className="column is-7">
                    <h3 className="has-text-weight-semibold is-size-3">{frontmatter.main.heading}</h3>
                    <p>{frontmatter.main.description}</p>
                  </div>
                </div>
                <div className="tile is-ancestor">
                  <div className="tile is-vertical">
                    <div className="tile">
                      <div className="tile is-parent is-vertical">
                        <article className="tile is-child">
                          <img
                            style={{ borderRadius: '5px' }}
                            src={frontmatter.main.image1.image}
                            alt=""
                          />
                        </article>
                      </div>
                      <div className="tile is-parent">
                        <article className="tile is-child">
                          <img
                            style={{ borderRadius: '5px' }}
                            src={frontmatter.main.image2.image}
                            alt=""
                          />
                        </article>
                      </div>
                    </div>
                    <div className="tile is-parent">
                      <article className="tile is-child">
                        <img
                          style={{ borderRadius: '5px' }}
                          src={frontmatter.main.image3.image}
                          alt=""
                        />
                      </article>
                    </div>
                  </div>
                </div>
                <Testimonials testimonials={frontmatter.testimonials} />
                <div
                  className="full-width-image-container"
                  style={{ backgroundImage: `url(${frontmatter.full_image})` }}
                />
                <h2 className="has-text-weight-semibold is-size-2">{frontmatter.pricing.heading}</h2>
                <p className="is-size-5">{frontmatter.pricing.description}</p>
                <Pricing data={frontmatter.pricing.plans} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const productPageQuery = graphql`
  query ProductPage($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      frontmatter {
        title
        path
        image
        heading
        description
        intro {
          blurbs {
            image
            text
          }
          heading
          description
        }
        main {
          heading
          description
          image1 {
            alt
            image
          }
          image2 {
            alt
            image
          }
          image3 {
            alt
            image
          }
        }
        testimonials {
          author
          quote
        }
        full_image
        pricing {
          heading
          description
          plans {
            description
            items
            plan
            price
          }
        }
      }
    }
  }
`;
