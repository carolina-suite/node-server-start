
var db = require('../db');

var argparse = require('argparse');

var parser = argparse.ArgumentParser({
  addHelp: true,
  description: 'Site managment.',
  version: '1.0.0'
});
parser.addArgument('fixtureName', {
  addHelp: true,
  description: 'Name of the fixture to load.'
});

var args = parser.parseArgs();

async function loadFixtureEntry(fixture) {

  var Model = require(`../../apps/${fixture.model.app}/models`)[fixture.model.model];
  var obj = new Model(fixture.fields);

  if (fixture.hasOwnProperty('methods')) {
    for (var i = 0; i < fixture.methods.length; ++i) {
      var methodSpec = fixture.methods[i];
      await obj[methodSpec.methodName].apply(obj, methodSpec.args);
    }
  }

  await obj.save();
}
async function loadFixture(fixtureName) {

  var fixture = require(`../../fixtures/${fixtureName}`);
  for (var i = 0; i < fixture.length; ++i) {
    await loadFixtureEntry(fixture[i]);
  }
}

loadFixture(args.fixtureName).then(() => process.exit());
