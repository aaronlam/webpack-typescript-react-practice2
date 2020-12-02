const proxySettings = {
  '/api/': {
    target: 'http://192.168.1.1:8080',
    changeOrigin: true,
  },
  '/api2/': {
    target: 'http://182.168.1.2:8080',
    changeOrigin: true,
    pathRewrite: {
      '^/api2': '',
    },
  },
};

module.exports = proxySettings;
