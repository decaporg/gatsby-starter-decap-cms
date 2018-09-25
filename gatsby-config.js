module.exports = {
  siteMetadata: {
    title: "Gatsby + Netlify CMS + MDX Starter",
    description: `gatsby-mdx netlifycms starter`,
    docsLocation: `https://github.com/ChristopherBiscardi/gatsby-mdx/tree/master/examples/docs/content`
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sass",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/pages`,
        name: "pages"
      }
    },
    // {
    //   resolve: "gatsby-source-filesystem",
    //   options: {
    //     path: `${__dirname}/src/img`,
    //     name: "images"
    //   }
    // },
    {
      resolve: `gatsby-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 1035,
              sizeByPixelDensity: true
            }
          }
        ]
      }
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-plugin-netlify-cms",
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`
      }
    },
    "gatsby-plugin-netlify" // make sure to keep it last in the array
  ]
};
