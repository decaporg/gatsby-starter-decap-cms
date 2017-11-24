const path = require('path');

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators;

  return graphql(`
    {
      allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }, limit: 1000) {
        edges {
          node {
            excerpt(pruneLength: 400)
            html
            id
            frontmatter {
              templateKey
              path
              date
              title
              image {
                childImageSharp {
                  resolutions(width: 1400) {
                    width
                    height
                    src
                    srcSet
                  }
                }
              }
              heading
              description
              intro {
                blurbs {
                  image {
                    childImageSharp {
                      resolutions(width: 400) {
                        width
                        height
                        src
                        srcSet
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
                      resolutions(width: 400) {
                        width
                        height
                        src
                        srcSet
                      }
                    }
                  }
                }
                image2 {
                  alt
                  image {
                    childImageSharp {
                      resolutions(width: 400) {
                        width
                        height
                        src
                        srcSet
                      }
                    }
                  }
                }
                image3 {
                  alt
                  image {
                    childImageSharp {
                      resolutions(width: 400) {
                        width
                        height
                        src
                        srcSet
                      }
                    }
                  }
                }
              }
              testimonials {
                author
                quote
              }
              full_image {
                childImageSharp {
                  resolutions(width: 400) {
                    width
                    height
                    src
                    srcSet
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
      }
    }
  `).then(result => {
    if (result.errors) {
      console.log(result.errors);
      return Promise.reject(result.errors);
    }
    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: path.resolve(`src/templates/${String(node.frontmatter.templateKey)}.js`),
        context: {} // additional data can be passed via context
      });
    });
  });
};
