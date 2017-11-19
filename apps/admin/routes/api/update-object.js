
var fs = require('fs-extra');
var path = require('path');

var mongoose = require('mongoose');

async function updateObject(request, reply) {

  var Model = mongoose.model(request.params.model);
  var update = await Model.updateOne(
    { _id: request.params.object },
    request.body.update
  );

  reply.send(update);
}

module.exports = updateObject;
