
var path = require('path');

var mongoose = require('mongoose');

async function createObject(request, reply) {

  var Model = mongoose.model(request.params.model);
  var obj = new Model(request.body.obj);
  var result = await obj.save();

  reply.send(result);
}

module.exports = createObject;
