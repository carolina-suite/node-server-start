
var jwt = require('jsonwebtoken');

var config = require('../../../config');
var logger = require('../../../site/logger');

var User = require('../models/user');

async function apiAuthCheck (request, reply, next) {

  if (!request.body.hasOwnProperty('carolinaToken')) {
    logger.auth.log('verbose', 'Request rejected. No token provided.');
    return reply.code(401).send({
      success: false,
      message: "No token provided."
    });
  }

  var tokenValidation = null;

  try {
    tokenValidation = jwt.verify(request.body.carolinaToken, process.env.SECRET);
  }
  catch(err) {
    logger.auth.log('verbose', 'Request rejected. Bad or expired token.');
    return reply.code(401).send({
      success: false,
      message: "Bad or expired token."
    });
  }

  request.user = await User.findOne({ username: tokenValidation.username });
  logger.auth.log('verbose', `Request permitted with authenticated user ${request.user.username}.`);

  next();
}
module.exports = apiAuthCheck;
