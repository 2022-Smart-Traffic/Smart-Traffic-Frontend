const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        '/api',
        createProxyMiddleware({
            target: 'https://smarttraffic.bssm.kro.kr',
            changeOrigin: true
        }),
    );
};