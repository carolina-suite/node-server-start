
var render = require('./render');

module.exports = function(request, reply) {
  reply.type('text/html').send(render('SITE/home.pug', {}));
};
