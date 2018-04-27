module.exports = () => ({

  plugins: [

    require('postcss-media-minmax')(),

    require('postcss-selector-not')(),

    require('postcss-flexbugs-fixes')(),

    require('autoprefixer')()
  ]
})