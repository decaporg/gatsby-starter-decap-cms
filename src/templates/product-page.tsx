import React, { FC } from 'react'
import { graphql } from 'gatsby'
import { get } from 'lodash'
import Layout from '../components/Layout'
import Features from '../components/Features'
import Testimonials from '../components/Testimonials'
import Pricing from '../components/Pricing'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'
import { GatsbyImageProps } from 'gatsby-image'

type Image =
  | {
      childImageSharp: GatsbyImageProps
    }
  | string

type ProductPageTemplateProps = {
  image: Image
  title: string
  heading: string
  description: string
  intro: {
    blurbs: {
      image: Image
      text: string
    }[]
  }
  main: {
    heading: string
    description: string
    image1: {
      image: Image
      alt: string
    }
    image2: {
      image: Image
      alt: string
    }
    image3: {
      image: Image
      alt: string
    }
  }
  testimonials: {
    author: string
    quote: string
  }[]
  fullImage: Image
  pricing: {
    heading: string
    description: string
    plans: {
      description: string
      items: string[]
      plan: string
      price: string
    }[]
  }
}
export const ProductPageTemplate: FC<ProductPageTemplateProps> = ({
  image,
  title,
  heading,
  description,
  intro,
  main,
  testimonials,
  fullImage,
  pricing
}) => (
  <section className="section section--gradient">
    <div className="container">
      <div className="section">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="content">
              <div
                className="full-width-image-container margin-top-0"
                style={{
                  backgroundImage: `url(${
                    typeof image !== 'string'
                      ? get(image, 'childImageSharp.fluid.src')
                      : image
                  })`
                }}
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
                  {title}
                </h2>
              </div>
              <div className="columns">
                <div className="column is-7">
                  <h3 className="has-text-weight-semibold is-size-2">{heading}</h3>
                  <p>{description}</p>
                </div>
              </div>
              <Features gridItems={intro.blurbs} />
              <div className="columns">
                <div className="column is-7">
                  <h3 className="has-text-weight-semibold is-size-3">{main.heading}</h3>
                  <p>{main.description}</p>
                </div>
              </div>
              <div className="tile is-ancestor">
                <div className="tile is-vertical">
                  <div className="tile">
                    <div className="tile is-parent is-vertical">
                      <article className="tile is-child">
                        <PreviewCompatibleImage imageInfo={main.image1} />
                      </article>
                    </div>
                    <div className="tile is-parent">
                      <article className="tile is-child">
                        <PreviewCompatibleImage imageInfo={main.image2} />
                      </article>
                    </div>
                  </div>
                  <div className="tile is-parent">
                    <article className="tile is-child">
                      <PreviewCompatibleImage imageInfo={main.image3} />
                    </article>
                  </div>
                </div>
              </div>
              <Testimonials testimonials={testimonials} />
              <div
                className="full-width-image-container"
                style={{
                  backgroundImage: `url(${
                    fullImage && typeof fullImage !== 'string'
                      ? get(fullImage, 'childImageSharp.fluid.src')
                      : fullImage
                  })`
                }}
              />
              <h2 className="has-text-weight-semibold is-size-2">{pricing.heading}</h2>
              <p className="is-size-5">{pricing.description}</p>
              <Pricing data={pricing.plans} />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
)

type Props = {
  data: {
    markdownRemark: {
      frontmatter: ProductPageTemplateProps
    }
  }
}
const ProductPage: FC<Props> = ({ data }) => {
  const { frontmatter } = data.markdownRemark
  return (
    <Layout>
      <ProductPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        description={frontmatter.description}
        intro={frontmatter.intro}
        main={frontmatter.main}
        testimonials={frontmatter.testimonials}
        fullImage={frontmatter.fullImage}
        pricing={frontmatter.pricing}
      />
    </Layout>
  )
}
export default ProductPage
export const productPageQuery = graphql`
  query ProductPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
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
                fluid(maxWidth: 526, quality: 92) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          image2 {
            alt
            image {
              childImageSharp {
                fluid(maxWidth: 526, quality: 92) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          image3 {
            alt
            image {
              childImageSharp {
                fluid(maxWidth: 1075, quality: 72) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
        testimonials {
          author
          quote
        }
        full_image: fullImage {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
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
`
