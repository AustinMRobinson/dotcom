module.exports = {
  siteMetadata: {
    title: `AustinMRobinsonDotCom`,
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
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images/`,
      },
    },
    `gatsby-plugin-react-helmet`,
  ],
}
