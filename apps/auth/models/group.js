
var mongoose = require('mongoose');

var permissionSchema = require('./schemas/permission');

var groupSchema = new mongoose.Schema({
  name: { type: String, unique: true },
  verboseName: String,
  permissions: [permissionSchema],
  description: String
});

groupSchema.methods.getAdminDisplayName = function() {
  return this.verboseName;
};

groupSchema.methods.hasPermission = function(perm) {

  for (var i = 0; i < this.permissions.length; ++i) {
    if (this.permissions[i].name == perm) {
      return true;
    }
  }

  return false;
};

var Group = mongoose.model('Group', groupSchema);
module.exports = Group;
