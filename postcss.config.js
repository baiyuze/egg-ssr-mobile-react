'use strict';
const pxtorem = require('postcss-pxtorem');
const webpackConfig = {
  plugins: [
    require('autoprefixer')({ browsers: [
    "> 1%",
    "last 2 versions",
    "Android >= 3.2", 
    "Firefox >= 20", 
    "iOS 7"] }),
    pxtorem({
      rootValue: 100,
      propWhiteList: [],
    })
  ]
};
module.exports = webpackConfig;
