const proxy = require('http-proxy-middleware');

module.exports = function(app) {
  app.use('http://wow.kg/crm/api/?action=view&object=api_products&id=223', proxy({
    target: 'http://localhost:3000',
    changeOrigin: true,
  }));
};