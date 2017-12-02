
var config = require('../../../../config');
var logger = require('../../../../site/logger');

var emailService = require('../../../../lib/email');

var User = require('../../models/user');

async function login(request, reply) {

  if (!request.body.hasOwnProperty('username')) {
    logger.auth.log('verbose', "Request rejected. No username provided.");
    reply.status(401).send({
      success: false,
      message: "Username required."
    });
  }

  try {
    var user = await User.findOne({ username: request.body.username });
    if (user.email.length > 0) {

      var newPassword = require('rand-token').generate(16);
      user.setPassword(newPassword);

      await user.save();
      await emailService.sendTemplate('auth/password-reset.heml', {
        to: [user.email],
        from: config.SITE.email.address,
        data: {
          user: user.username,
          password: newPassword,
          siteName: config.SITE.name
        }
      });
    }
  }
  catch(err) {
    console.log(err);
    logger.auth.log('error', "Error reseting user password.", { err: err });
    return reply.send({
      success: true,
      message: "If you had a valid e-mail on file, a new password was sent to you. Otherwise, you're screwed."
    });
  }

  logger.auth.log('verbose', `Password reset for username ${request.body.username}.`);
  return reply.send({
    success: true,
    message: "If you had a valid e-mail on file, a new password was sent to you. Otherwise, you're screwed."
  })
}

module.exports = login;
