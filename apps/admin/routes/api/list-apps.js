
var fs = require('fs-extra');
var path = require('path');

async function listApps(request, reply, next) {

  var appList = [];

  var apps = fs.readdirSync(path.resolve(__dirname, '..', '..', '..'));
  for (var i = 0; i < apps.length; ++i) {
    var appName = apps[i];
    appList.push({ name: appName, models: [] });
    if (appName == 'admin') continue;
    if (fs.existsSync(path.resolve(__dirname, '..', '..', '..', appName, 'models'))) {
      var appModels = require(`../../../${appName}/models`);
      for (var modelName in appModels) {
        appList[appList.length-1].models.push(modelName);
      }
    }
  }

  reply.send(appList);
}

module.exports = listApps;
