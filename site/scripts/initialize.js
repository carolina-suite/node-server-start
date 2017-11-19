
const crypto = require('crypto');
const fs = require('fs-extra');
const path = require('path');

if (!fs.existsSync('.env')) {

  let firstLine = `SECRET=${crypto.randomBytes(32).toString('hex')}`;
  let configText = firstLine + "\nCONFIG_NAME=main";
  fs.writeFileSync('.env', configText);
}
