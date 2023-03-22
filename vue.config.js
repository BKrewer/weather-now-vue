const path = require('path')

module.exports = {
  chainWebpack(config) {
    config.resolve.alias
      .set('@', path.join(__dirname, './src'))
  },
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
          @import "@/assets/styles/_variables.scss";
        `
      }
    }
  }
}