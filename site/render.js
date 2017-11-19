
var path = require('path');
const pug = require('pug');
const _ = require('underscore');

var config = require('../config');

const TEMPLATE_DIR = path.resolve(__dirname, '..', '.templates');

module.exports = function(templateName, data) {
  data = _.extend({
    basedir: TEMPLATE_DIR,
    title: config.SITE.name
  }, data);
  return pug.renderFile(path.resolve(TEMPLATE_DIR, templateName), data);
};
