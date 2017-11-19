
var fs = require('fs-extra');
var path = require('path');

var mongoose = require('mongoose');

async function updateObject(request, reply) {

  var Model = mongoose.model(request.params.model);
  var object = await Model.findOne({ _id: request.params.object });

  var removal = await object.remove();
  reply.send(removal);
}

module.exports = updateObject;
