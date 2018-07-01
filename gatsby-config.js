module.exports = {
  siteMetadata: {
    title: 'Jason Lengstorf · There’s more to life than hustle & grind.',
    description: '',
    url: 'https://lengstorf.com',
    image: 'https://lengstorf.com/images/jason-lengstorf.jpg',
    logo: 'https://lengstorf.com/android-chrome-512x512.png',
    twitter: '@jlengstorf',
    fbAppID: '',
    author: {
      minibio: `
        <strong>Jason Lengstorf</strong> is a lead developer & architect at IBM.
        He’s a frequent <a href="/speaking">speaker</a>, occasional
        <a href="https://dribbble.com/jlengstorf">designer</a>, and an advocate of
        building better balance via efficiency. He lives in Austin, Texas.
      `,
    },
    transitionSpeed: 150, // milliseconds
    postsPerPage: 10,
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/img`,
        name: 'images',
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [],
      },
    },
    {
      resolve: 'gatsby-plugin-netlify-cms',
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`,
      },
    },
    'gatsby-plugin-netlify', // make sure to keep it last in the array
  ],
}
