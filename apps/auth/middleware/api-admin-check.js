
// assumes api-auth-check has already happened.
async function apiAdminCheck (request, reply, next) {
  if (request.user.isAdmin) {
    next();
  }
  else {
    return reply.code(401).send({
      success: false,
      message: "Not an admin account."
    });
  }
};

module.exports = apiAdminCheck;
