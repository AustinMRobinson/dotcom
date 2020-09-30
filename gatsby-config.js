module.exports = {
  siteMetadata: {
    title: `Austin Robinson`,
    description: `My site :)`,
    author: `@austinmrobinson`,
  },
  plugins: [
    'gatsby-plugin-dark-mode',
    `gatsby-plugin-emotion`,
    `gatsby-plugin-postcss`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
          icon: `src/images/favicon.svg`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/blog-posts/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/work-gallery/`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-react-helmet`,
  ],
}
