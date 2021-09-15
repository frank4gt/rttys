const CompressionPlugin = require('compression-webpack-plugin')

module.exports = {
  productionSourceMap: false,
  pages: {
    index: {
      entry: 'src/main.ts',
      title: 'Rttys'
    }
  },
  pluginOptions: {
    i18n: {
      locale: 'en',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableInSFC: false
    }
  },
  configureWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      return {
        plugins: [new CompressionPlugin({
          test: /\.js$|\.html$|\.css/,
          threshold: 4096,
          deleteOriginalAssets: true,
          filename: '[path][base]?gz'
        })]
      }
    }
  },
  devServer: {
    proxy: {
      '/devs': {
        target: 'http://127.0.0.1:5913'
      },
      '/signin': {
        target: 'http://127.0.0.1:5913'
      },
      '/signout': {
        target: 'http://127.0.0.1:5913'
      },
      '/alive': {
        target: 'http://127.0.0.1:5913'
      },
      '/signup': {
        target: 'http://127.0.0.1:5913'
      },
      '/isadmin': {
        target: 'http://127.0.0.1:5913'
      },
      '/users': {
        target: 'http://127.0.0.1:5913'
      },
      '/bind': {
        target: 'http://127.0.0.1:5913'
      },
      '/unbind': {
        target: 'http://127.0.0.1:5913'
      },
      '/cmd/*': {
        target: 'http://127.0.0.1:5913'
      },
      '/connect/*': {
        ws: true,
        target: 'http://127.0.0.1:5913'
      },
      '/fontsize/*': {
        target: 'http://127.0.0.1:5913'
      },
      '/authorized/*': {
        target: 'http://127.0.0.1:5913'
      }
    }
  }
};