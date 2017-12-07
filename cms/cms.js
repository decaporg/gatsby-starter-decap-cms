import React from 'react'
import CMS from 'netlify-cms'

import Features from 'site/components/Features'
import Testimonials from 'site/components/Testimonials'
import Pricing from 'site/components/Pricing'

const AboutPagePreview = ({ entry, widgetFor }) => (
  <section className="section section--gradient">
    <div className="container">
      <div className="columns">
        <div className="column is-10 is-offset-1">
          <div className="section">
            <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
              {entry.getIn(['data', 'title'])}
            </h2>
            <div className="content">{widgetFor('body')}</div>
          </div>
        </div>
      </div>
    </div>
  </section>
)

const BlogPostPreview = ({ entry, widgetFor }) => (
  <section className="section">
    <div className="container content">
      <div className="columns">
        <div className="column is-10 is-offset-1">
          <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
            {entry.getIn(['data', 'title'])}
          </h1>
          <p>{entry.getIn(['data', 'description'])}</p>
          <div>{widgetFor('body')}</div>
        </div>
      </div>
    </div>
  </section>
)

const ProductPagePreview = ({ entry, widgetFor, getAsset }) => {
  const entryBlurbs = entry.getIn(['data', 'intro', 'blurbs'])
  const blurbs = entryBlurbs ? entryBlurbs.toJS() : []

  const entryTestimonials = entry.getIn(['data', 'testimonials'])
  const testimonials = entryTestimonials ? entryTestimonials.toJS() : []

  const entryPricingPlans = entry.getIn(['data', 'pricing', 'plans'])
  const pricingPlans = entryPricingPlans ? entryPricingPlans.toJS() : []

  return (
    <section className="section section--gradient">
      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="content">
                <div
                  className="full-width-image-container margin-top-0"
                  style={{
                    backgroundImage: `url(${getAsset(
                      entry.getIn(['data', 'image'])
                    )})`,
                  }}
                >
                  <h2
                    className="has-text-weight-bold is-size-1"
                    style={{
                      boxShadow: '0.5rem 0 0 #f40, -0.5rem 0 0 #f40',
                      backgroundColor: '#f40',
                      color: 'white',
                      padding: '1rem',
                    }}
                  >
                    {entry.getIn(['data', 'title'])}
                  </h2>
                </div>
                <div className="columns">
                  <div className="column is-7">
                    <h3 className="has-text-weight-semibold is-size-2">
                      {entry.getIn(['data', 'heading'])}
                    </h3>
                    <p>{entry.getIn(['data', 'description'])}</p>
                  </div>
                </div>
                <Features gridItems={blurbs} />
                <div className="columns">
                  <div className="column is-7">
                    <h3 className="has-text-weight-semibold is-size-3">
                      {entry.getIn(['data', 'main', 'heading'])}
                    </h3>
                    <p>{entry.getIn(['main', 'description'])}</p>
                  </div>
                </div>
                <div className="tile is-ancestor">
                  <div className="tile is-vertical">
                    <div className="tile">
                      <div className="tile is-parent is-vertical">
                        <article className="tile is-child">
                          <img
                            style={{ borderRadius: '5px' }}
                            src={entry.getIn([
                              'data',
                              'main',
                              'image1',
                              'image',
                            ])}
                            alt=""
                          />
                        </article>
                      </div>
                      <div className="tile is-parent">
                        <article className="tile is-child">
                          <img
                            style={{ borderRadius: '5px' }}
                            src={entry.getIn([
                              'data',
                              'main',
                              'image2',
                              'image',
                            ])}
                            alt=""
                          />
                        </article>
                      </div>
                    </div>
                    <div className="tile is-parent">
                      <article className="tile is-child">
                        <img
                          style={{ borderRadius: '5px' }}
                          src={entry.getIn(['data', 'main', 'image3', 'image'])}
                          alt=""
                        />
                      </article>
                    </div>
                  </div>
                </div>
                <Testimonials testimonials={testimonials} />
                <div
                  className="full-width-image-container"
                  style={{
                    backgroundImage: `url(${getAsset(
                      entry.getIn(['data', 'full_image'])
                    )})`,
                  }}
                />
                <h2 className="has-text-weight-semibold is-size-2">
                  {entry.getIn(['data', 'pricing', 'heading'])}
                </h2>
                <p className="is-size-5">
                  {entry.getIn(['data', 'pricing', 'description'])}
                </p>
                <Pricing data={pricingPlans} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

CMS.registerPreviewStyle('/styles.css')
CMS.registerPreviewTemplate('about', AboutPagePreview)
CMS.registerPreviewTemplate('products', ProductPagePreview)
CMS.registerPreviewTemplate('blog', BlogPostPreview)
