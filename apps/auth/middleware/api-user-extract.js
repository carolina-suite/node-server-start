
var jwt = require('jsonwebtoken');

var config = require('../../../config');
var logger = require('../../../site/logger');

var User = require('../models/user');

async function apiUserExtract(request, reply, next) {

  if (!request.body.hasOwnProperty('carolinaToken')) {
    request.user = null;
    next();
  }

  var tokenValidation = null;

  try {
    tokenValidation = jwt.verify(request.body.carolinaToken, process.env.SECRET);
  }
  catch(err) {
    request.user = null;
    next();
  }

  request.user = await User.findOne({ username: tokenValidation.username });
  logger.auth.log('verbose', `Request made with authenticated user ${request.user.username}.`);

  next();
}
module.exports = apiUserExtract;
