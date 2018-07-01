import React from 'react'
import PropTypes from 'prop-types'
import { HTMLContent } from '../../components/Content'

const PageLayout = ({ title, content }) => {

  return (
    <section className="section section--gradient">
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="section">
              <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                {title}
              </h2>
              <HTMLContent className="content" content={content} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
};

PageLayout.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
}

export default PageLayout;
