// vue.config.js
module.exports = {
    devServer: {
      proxy: {
        '/api': {
          target: 'http://localhost:3000', // URL de ton backend
          changeOrigin: true
        }
      }
    }
  };
  