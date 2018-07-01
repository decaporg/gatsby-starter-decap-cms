import React from 'react'
import PropTypes from 'prop-types'
import { kebabCase } from 'lodash'
import { Link, graphql } from 'gatsby';
import { PostLayout } from '../layouts';
import Content, { HTMLContent } from '../components/Content'


const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <PostLayout
      content={post.html}
      description={post.frontmatter.description}
      tags={post.frontmatter.tags}
      title={post.frontmatter.title}
    />
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
