
var render = require('../../../site/render');

var authCheck = require('../../auth/middleware/api-auth-check');
var adminCheck = require('../../auth/middleware/api-admin-check');

function main(request, reply) {
  reply.type('text/html').send(render('SITE/app.pug', {
    appName: 'admin',
    cssFiles: [
      '/static/SITE/css/codemirror.css',
      '/static/SITE/css/font-awesome.min.css'
    ],
    title: "Admin Panel"
  }));
}

module.exports = function(fastify, options, next) {

  fastify.get('/', main);

  fastify.all('/api/list-apps', { beforeHandler: [authCheck, adminCheck] }, require('./api/list-apps'));
  fastify.all('/api/create-object/:model', { beforeHandler: [authCheck, adminCheck] }, require('./api/create-object'));
  fastify.all('/api/list-objects/:model/:page', { beforeHandler: [authCheck, adminCheck] }, require('./api/list-objects'));
  fastify.all('/api/get-object-start/:model', { beforeHandler: [authCheck, adminCheck] }, require('./api/get-object-start'));
  fastify.all('/api/get-object/:model/:object', { beforeHandler: [authCheck, adminCheck] }, require('./api/get-object'));
  fastify.post('/api/update-object/:model/:object', { beforeHandler: [authCheck, adminCheck] }, require('./api/update-object'));
  fastify.post('/api/delete-object/:model/:object', { beforeHandler: [authCheck, adminCheck] }, require('./api/delete-object'));

  next();
};
