import React from 'react'
import PropTypes from 'prop-types'
import { kebabCase } from 'lodash';
import { Link } from 'gatsby';
import { HTMLContent } from '../../components/Content'

const PostLayout = ({
  content,
  description,
  tags,
  title,
}) => {

  return (
    <section className="section">
      <div className="container content">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
              {title}
            </h1>
            <p>{description}</p>
            <HTMLContent content={content} />
            {tags && tags.length ? (
              <div style={{ marginTop: `4rem` }}>
                <h4>Tags</h4>
                <ul className="taglist">
                  {tags.map(tag => (
                    <li key={tag + `tag`}>
                      <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  )
};

PostLayout.defaultProps = {
  content: '',
  description: '',
  tags: [],
  title: '',
};

PostLayout.propTypes = {
  content: PropTypes.string.isRequired,
  description: PropTypes.string,
  title: PropTypes.string,
  tags: PropTypes.array,
};

export default PostLayout;
