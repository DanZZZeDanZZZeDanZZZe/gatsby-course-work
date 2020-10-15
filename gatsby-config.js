module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [
          require('postcss-mixins')(),
          require(`postcss-nesting`)(),
          require(`postcss-preset-env`)({
            stage: 0,
          }),
          require('cssnano')(),
        ],
      },
    },
    `gatsby-plugin-react-helmet`,
  ],
}
