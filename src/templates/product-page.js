import React from 'react';
import Features from '../components/Features';
import Testimonials from '../components/Testimonials';
import Pricing from '../components/Pricing';
import grid1 from '../pages/product/img/products/products-grid1.jpg';
import grid2 from '../pages/product/img/products/products-grid2.jpg';
import grid3 from '../pages/product/img/products/products-grid3.jpg';
import fullWidth from '../pages/product/img/products/products-full-width.jpg';

export default ({ data }) => {
  const { markdownRemark: post } = data;
  const { frontmatter } = post;
  return (
    <section className="section section--gradient">
      <div className="container">
        <div className="section">
          <div className="content">
            <h2>{frontmatter.title}</h2>
            <p>{frontmatter.description}</p>
            <Features gridItems={frontmatter.intro.blurbs} />
            <h3>{frontmatter.main.heading}</h3>
            <p>{frontmatter.main.description}</p>
            <div className="tile is-vertical is-ancestor">
              <div className="tile is-parent">
                <div className="tile is-child is-6">
                  <img src={grid1} alt="" />
                </div>
                <div className="tile is-child is-6">
                  <img src={grid2} alt="" />
                </div>
              </div>
              <div className="tile is-parent">
                <div className="tile is-child">
                  <img src={grid3} alt="" />
                </div>
              </div>
            </div>
            <Testimonials testimonials={frontmatter.testimonials} />
            <div className="full-width-container">
              <img src={fullWidth} alt="" />
            </div>
            <h2>{frontmatter.pricing.heading}</h2>
            <p>{frontmatter.pricing.description}</p>
            <Pricing data={frontmatter.pricing.plans} />
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
