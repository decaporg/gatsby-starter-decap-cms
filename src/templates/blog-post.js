import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby';
import BaseTemplate from './base-template';
import { PostLayout } from '../layouts';


const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <BaseTemplate data={data} isBlog>
      <PostLayout
        content={post.html}
        description={post.frontmatter.description}
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
      />
    </BaseTemplate>
  )
}

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default BlogPost

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    ...SiteMeta
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        tags
      }
    }
  }
`
