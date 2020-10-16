module.exports = {
  plugins: [
    `gatsby-transformer-yaml`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data/`,
        ignore: [`**/\.*`],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
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
