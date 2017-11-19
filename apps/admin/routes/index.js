
var render = require('../../../site/render');

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

  fastify.all('/api/list-apps', require('./api/list-apps'));
  fastify.all('/api/list-objects/:model/:page', require('./api/list-objects'));
  fastify.all('/api/get-object-start/:model', require('./api/get-object-start'));
  fastify.all('/api/get-object/:model/:object', require('./api/get-object'));
  fastify.post('/api/update-object/:model/:object', require('./api/update-object'));
  fastify.post('/api/delete-object/:model/:object', require('./api/delete-object'));

  next();
};
