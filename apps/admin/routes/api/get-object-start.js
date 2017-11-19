
var fs = require('fs-extra');
var path = require('path');

var mongoose = require('mongoose');

async function getObjectStart(request, reply) {

  var Model = mongoose.model(request.params.model);
  var startObject = {};

  try {
    console.log(Model.getAdminTemplate);
    startObject = Model.getAdminTemplate();
    console.log(startObject);
  }
  catch (err) {}

  reply.send(startObject);
}

module.exports = getObjectStart;
