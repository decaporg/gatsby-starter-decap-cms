import React from 'react';
import Features from '../components/Features';
import Testimonials from '../components/Testimonials';
import Pricing from '../components/Pricing';
import grid1 from '../pages/product/img/products/products-grid1.jpg';
import grid2 from '../pages/product/img/products/products-grid2.jpg';
import grid3 from '../pages/product/img/products/products-grid3.jpg';
import fullWidth from '../pages/product/img/products/products-full-width.jpg';

export default ({ data }) => {
  console.log(data);
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
                  style={{ backgroundImage: `url(${frontmatter.image.childImageSharp.resolutions.src})` }}
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
                            src={frontmatter.main.image1.image.childImageSharp.resolutions.src}
                            alt=""
                          />
                        </article>
                      </div>
                      <div className="tile is-parent">
                        <article className="tile is-child">
                          <img
                            style={{ borderRadius: '5px' }}
                            src={frontmatter.main.image2.image.childImageSharp.resolutions.src}
                            alt=""
                          />
                        </article>
                      </div>
                    </div>
                    <div className="tile is-parent">
                      <article className="tile is-child">
                        <img
                          style={{ borderRadius: '5px' }}
                          src={frontmatter.main.image3.image.childImageSharp.resolutions.src}
                          alt=""
                        />
                      </article>
                    </div>
                  </div>
                </div>
                <Testimonials testimonials={frontmatter.testimonials} />
                <div
                  className="full-width-image-container"
                  style={{ backgroundImage: `url(${frontmatter.full_image.childImageSharp.resolutions.src})` }}
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
        image {
          childImageSharp {
            resolutions(width: 1400) {
              width
              height
              src
              srcSet
            }
          }
        }
        heading
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                resolutions(width: 220) {
                  width
                  height
                  src
                  srcSet
                }
              }
            }
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
            image {
              childImageSharp {
                resolutions(width: 700) {
                  src
                }
              }
            }
          }
          image2 {
            alt
            image {
              childImageSharp {
                resolutions(width: 700) {
                  src
                }
              }
            }
          }
          image3 {
            alt
            image {
              childImageSharp {
                resolutions(width: 1400) {
                  src
                }
              }
            }
          }
        }
        testimonials {
          author
          quote
        }
        full_image {
          childImageSharp {
            resolutions(width: 1400) {
              src
            }
          }
        }
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
