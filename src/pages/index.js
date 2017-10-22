import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';

export default function Index({ data }) {
  const { edges: posts } = data.allMarkdownRemark;
  return (
    <section className="section">
      <div className="container">
        {posts.filter(post => post.node.frontmatter.templateKey === 'blog-post').map(({ node: post }) => {
          return (
            <div className="content" style={{ border: '1px solid #eaecee', padding: '2em 4em' }} key={post.id}>
              <p>
                <Link to={post.frontmatter.path}>{post.frontmatter.title}</Link>
                <span> &bull; </span>
                <small>{post.frontmatter.date}</small>
              </p>
              <p>
                {post.excerpt}
                <br />
                <br />
                <Link className="button is-info is-small" to={post.frontmatter.path}>
                  Keep Reading
                </Link>
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          frontmatter {
            title
            templateKey
            date(formatString: "MMMM DD, YYYY")
            path
          }
        }
      }
    }
  }
`;
