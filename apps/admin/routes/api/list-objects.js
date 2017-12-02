
var fs = require('fs-extra');
var path = require('path');

var mongoose = require('mongoose');

var PAGE_SIZE = 5;

async function listObjects(request, reply) {

  var page = parseInt(request.params.page);
  var Model = mongoose.model(request.params.model)
  var objects = await Model.find().skip(PAGE_SIZE * (page - 1)).limit(PAGE_SIZE);
  var list = [];
  for (var i = 0; i < objects.length; ++i) {

    var object = objects[i];
    var listing = { id: object._id, display: object._id };

    try {
      listing.display = object.getAdminDisplayName();
    }
    catch (err) {}

    list.push(listing);
  }

  reply.send(list)
}
module.exports = listObjects;
