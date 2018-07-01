import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby';
import BaseTemplate from './base-template';
import { PageLayout } from '../layouts';

const AboutPage = ({ data }) => {
  const { markdownRemark: post } = data;
  return (
    <BaseTemplate data={data}>
      <PageLayout
        title={post.frontmatter.title}
        content={post.html}
      />
    </BaseTemplate>
  )
}

AboutPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default AboutPage

export const pageQuery = graphql`
  query AboutPage($id: String!) {
    ...SiteMeta
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
