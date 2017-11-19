
var fs = require('fs-extra');
var config = require('../../config');

if (config.SITE.hasOwnProperty('npmStaticFiles')) {
  for (var i = 0; i < config.SITE.npmStaticFiles.length; ++i) {
    var copyOrder = config.SITE.npmStaticFiles[i];
    fs.copySync(copyOrder.src, copyOrder.dest);
    console.log(`Copied ${copyOrder.src} to ${copyOrder.dest}.`);
  }
}
