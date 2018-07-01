import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby';
import { PageLayout } from '../layouts';
import Content, { HTMLContent } from '../components/Content'

const AboutPage = ({ data }) => {
  const { markdownRemark: post } = data;
  return (
    <PageLayout
      title={post.frontmatter.title}
      content={post.html}
    />
  )
}

AboutPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default AboutPage

export const pageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
