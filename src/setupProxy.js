const {createProxyMiddleware} = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    createProxyMiddleware('/ttb', {
      target: 'http://www.aladin.co.kr',
      changeOrigin: true,
    }),
  );
};