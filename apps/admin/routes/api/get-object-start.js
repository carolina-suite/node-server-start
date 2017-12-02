
var fs = require('fs-extra');
var path = require('path');

var mongoose = require('mongoose');

async function getObjectStart(request, reply) {

  var Model = mongoose.model(request.params.model);
  var startObject = {};

  try {
    startObject = Model.getAdminTemplate();
  }
  catch (err) {}

  reply.send(startObject);
}

module.exports = getObjectStart;
