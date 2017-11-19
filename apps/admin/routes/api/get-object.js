
var fs = require('fs-extra');
var path = require('path');

var mongoose = require('mongoose');

async function getObject(request, reply) {

  var Model = mongoose.model(request.params.model);
  var object = await Model.findOne({ _id: request.params.object });

  reply.send({
    obj: object,
    schema: Model.schema.paths
  });
}

module.exports = getObject;
