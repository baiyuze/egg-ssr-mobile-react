
const path = require('path')
const pkg = require(path.join(__dirname, './package.json'))

let theme = {}
if (pkg.theme && typeof pkg.theme === 'object') {
  theme = pkg.theme
}

module.exports = {
  egg: true,
  framework: 'react',
  devtool: 'source-map',
  entry: {
    list: 'app/web/index.jsx'
  },
  lib: ['react', 'react-dom'],
  alias: {
    asset: 'app/web/asset',
    components: 'app/web/components',
    common: 'app/web/common',
    page: 'app/web/page',
  },
  install:{
    check: false, // 默认禁用检测 loader 和 plugin 是否安装
    npm: 'cnpm'   // 动态安装时，默认采用 npm。 你可以使用 cnpm，tnpm等等 
  },
  loaders:{
    scss: true, // scss 默认禁用
    less: {
      options: {
        javascriptEnabled: true,
        modifyVars: theme
      }
    },
    
  },

  plugins: {
    
  },
  // done() {
  //   console.log('---webpack compile finish---');
  // }
}