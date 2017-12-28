
var fs = require('fs-extra');
var path = require('path');

var fastify = require('fastify');
const fastifyStatic = require('fastify-static');

var logger = require('./site/logger');

var server = fastify();

var config = require('./config');

fs.ensureDirSync(path.resolve(__dirname, '.heml'));
fs.ensureDirSync(path.resolve(__dirname, '.static'));
fs.ensureDirSync(path.resolve(__dirname, '.templates'));

var apps = fs.readdirSync(path.resolve(__dirname, 'apps'));
for (var i = 0; i < apps.length; ++i) {
  // register models
  if (fs.existsSync(path.resolve(__dirname, 'apps', apps[i], 'models'))) {
    require(`./apps/${apps[i]}/models`);
  }
  // copy heml
  if (fs.existsSync(path.resolve(__dirname, 'apps', apps[i], 'heml'))) {
    fs.copySync(
      path.resolve(__dirname, 'apps', apps[i], 'heml'),
      path.resolve(__dirname, '.heml', apps[i])
    );
  }
  // copy static
  if (fs.existsSync(path.resolve(__dirname, 'apps', apps[i], 'static'))) {
    fs.copySync(
      path.resolve(__dirname, 'apps', apps[i], 'static'),
      path.resolve(__dirname, '.static', apps[i])
    );
  }
  // copy templates
  if (fs.existsSync(path.resolve(__dirname, 'apps', apps[i], 'templates'))) {
    fs.copySync(
      path.resolve(__dirname, 'apps', apps[i], 'templates'),
      path.resolve(__dirname, '.templates', apps[i])
    );
  }
  // load routes
  if (fs.existsSync(path.resolve(__dirname, 'apps', apps[i], 'routes'))) {
    var routes = require(`./apps/${apps[i]}/routes`);
    server.register(routes, { prefix: `/${apps[i]}` });
  }

  // run the app's index.js file
  var appIndex = require(`./apps/${apps[i]}`);
}

// SITE static
if (fs.existsSync(path.resolve(__dirname, 'site', 'static'))) {
  fs.copySync(
    path.resolve(__dirname, 'site', 'static'),
    path.resolve(__dirname, '.static', 'SITE')
  );
}
// SITE templates
if (fs.existsSync(path.resolve(__dirname, 'site', 'templates'))) {
  fs.copySync(
    path.resolve(__dirname, 'site', 'templates'),
    path.resolve(__dirname, '.templates', 'SITE')
  );
}

// serve static files
server.register(fastifyStatic, {
  root: path.join(__dirname, '.static'),
  prefix: '/static/'
});

// root route
server.get('/', require('./site/home'));

server.addHook('preHandler', function(request, reply, next) {
  logger.SITE.log('verbose', `${request.req.method} ${request.req.url} from ${request.req.socket.remoteFamily} ${request.req.socket.remoteAddress}:${request.req.socket.remotePort}.`);
  next();
});

var runConfig = process.argv[2];
if (!runConfig) runConfig = 'default';

var port = config.SITE.runConfig[runConfig].port;

server.listen(port, function(err) {
  if (err) throw err;
  logger.SITE.log('info', `Server listening on port ${port}.`);
});
