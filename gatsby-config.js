module.exports = {
  pathPrefix: `/public`,
  plugins: [
    `gatsby-transformer-yaml`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [
          require('postcss-import')(),
          require('postcss-mixins')(),
          require(`postcss-nesting`)(),
          require(`postcss-preset-env`)({
            stage: 2,
          }),
          require('cssnano')(),
        ],
      },
    },
    `gatsby-plugin-react-helmet`,
  ],
}
