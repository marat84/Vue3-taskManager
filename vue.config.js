module.exports = {
  devServer: {
    proxy: {
      '^/api': {
        target: 'http://localhost:9000',
        logLevel: "debug",
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/'
        }
      }
    }
  }
};
