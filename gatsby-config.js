module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [
          require(`postcss-extend`)(),
          require(`postcss-nesting`)(),
          require(`postcss-preset-env`)({
            stage: 0,
          }),
          require('cssnano')(),
        ],
      },
    },
  ],
}
