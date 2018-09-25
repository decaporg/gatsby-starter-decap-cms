const _ = require("lodash");
const startCase = _.startCase;
const path = require("path");
// const { createFilePath } = require("gatsby-source-filesystem");
const componentWithMDXScope = require("gatsby-mdx/component-with-mdx-scope");

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;
  return graphql(`
    {
      allMdx {
        edges {
          node {
            id
            parent {
              ... on File {
                name
                sourceInstanceName
              }
            }
            code {
              scope
            }
            fields {
              slug
            }
            tableOfContents
            frontmatter {
              templateKey
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      result.errors.forEach(e => console.error(e.toString()));
      return Promise.reject(result.errors);
    }

    // const posts = result.data.allMarkdownRemark.edges
    const posts = result.data.allMdx.edges;

    posts.forEach(edge => {
      const id = edge.node.id;
      const node = edge.node;
      // console.log(
      //   "creating page",
      //   node.fields.slug,
      //   `src/templates/${String(edge.node.frontmatter.templateKey)}.js`
      // );
      createPage({
        // path: `/${node.parent.sourceInstanceName}/${node.parent.name}`,
        path: node.fields.slug || "/",
        // tags: edge.node.frontmatter.tags,
        component: componentWithMDXScope(
          // path.resolve("./src/components/posts-page-layout.js"),
          path.resolve(
            `src/templates/${String(edge.node.frontmatter.templateKey)}.js`
          ),
          node.code.scope
        ),
        context: { id: node.id }
      });
      // createPage({
      //   path: edge.node.fields.slug,
      //   tags: edge.node.frontmatter.tags,
      //   component: path.resolve(
      //     `src/templates/${String(edge.node.frontmatter.templateKey)}.js`
      //   ),
      //   // additional data can be passed via context
      //   context: {
      //     id,
      //   },
      // })
    });

    // // Tag pages:
    // let tags = [];
    // // Iterate through each post, putting all found tags into `tags`
    // posts.forEach(edge => {
    //   if (_.get(edge, `node.frontmatter.tags`)) {
    //     tags = tags.concat(edge.node.frontmatter.tags);
    //   }
    // });
    // // Eliminate duplicate tags
    // tags = _.uniq(tags);

    // // Make tag pages
    // tags.forEach(tag => {
    //   const tagPath = `/tags/${_.kebabCase(tag)}/`;

    //   createPage({
    //     path: tagPath,
    //     component: path.resolve(`src/templates/tags.js`),
    //     context: {
    //       tag
    //     }
    //   });
    // });
  });
};

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, "src"), "node_modules"],
      alias: { $components: path.resolve(__dirname, "src/components") }
    }
  });
};

exports.onCreateBabelConfig = ({ actions }) => {
  actions.setBabelPlugin({
    name: "@babel/plugin-proposal-export-default-from"
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  // if (node.internal.type === `MarkdownRemark`) {
  //   const value = createFilePath({ node, getNode });
  //   createNodeField({
  //     name: `slug`,
  //     node,
  //     value
  //   });
  // }
  if (node.internal.type === `Mdx`) {
    const parent = getNode(node.parent);
    let value = parent.relativePath.replace(parent.ext, "");

    if (value === "index") {
      value = "";
    }

    createNodeField({
      name: `slug`,
      node,
      value: `/${value}`
    });

    createNodeField({
      name: "id",
      node,
      value: node.id
    });

    createNodeField({
      name: "title",
      node,
      value: node.frontmatter.title || startCase(parent.name)
    });
  }
};
