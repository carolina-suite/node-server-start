
var fs = require('fs-extra');
var path = require('path');

var winston = require('winston');
require('winston-mongodb');

var config = require('../config');
var db = require('./db');

var loggers = {};

fs.ensureDirSync(path.join(__dirname, '..', '.logs'));
var apps = fs.readdirSync(path.resolve(__dirname, '..', 'apps'));

for (var i = 0; i < apps.length; ++i) {

  var appName = apps[i];
  var loggerFileName = path.join(__dirname, '..', '.logs', `${appName}${new Date().toISOString().slice(0,10)}.log`);
  loggers[appName] = new winston.Logger({
    transports: [
      new winston.transports.File({
        filename: loggerFileName,
        level: config.SITE.logLevel.file
      }),
      new winston.transports.Console({
        colorize: true,
        level: config.SITE.logLevel.console
      }),
      new winston.transports.MongoDB({
        collection: 'logs',
        db: `mongodb://${config.SITE.db.host}:${config.SITE.db.port}/${config.SITE.db.name}`,
        decolorize: true,
        label: appName,
        level: config.SITE.logLevel.db,
        silent: false
      })
    ]
  });
}

var loggerFileName = path.join(__dirname, '..', '.logs', `SITE${new Date().toISOString().slice(0,10)}.log`);
loggers.SITE = new winston.Logger({
  transports: [
    new winston.transports.File({
      filename: loggerFileName,
      level: config.SITE.logLevel.file
    }),
    new winston.transports.Console({
      colorize: true,
      level: config.SITE.logLevel.console
    }),
    new winston.transports.MongoDB({
      collection: 'logs',
      db: `mongodb://${config.SITE.db.host}:${config.SITE.db.port}/${config.SITE.db.name}`,
      decolorize: true,
      label: 'SITE',
      level: config.SITE.logLevel.db,
      silent: false
    })
  ]
});

module.exports = loggers;
