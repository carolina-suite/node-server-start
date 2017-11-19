
require('dotenv').config();

var configName = process.env.CONFIG_NAME || 'main';

module.exports = require(`./${configName}`);
