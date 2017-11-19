
var mongoose = require('mongoose');

var config = require('../config');

mongoose.Promise = global.Promise;
mongoose.connect(`mongodb://${config.SITE.db.host}:${config.SITE.db.port}/${config.SITE.db.name}`, {
  useMongoClient: true
});
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB Error'));
module.exports = db;
