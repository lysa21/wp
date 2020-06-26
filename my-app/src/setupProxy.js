const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use("/api/2560796474159112/",
    createProxyMiddleware( {
      target: "https://superheroapi.com",
      secure:false,
      changeOrigin: true,
    })
  );
};
