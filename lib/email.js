
var fs = require('fs-extra');
var path = require('path');

var aws = require('aws-sdk');
var heml = require('heml');
var moment = require('moment');
var nunjucks = require('nunjucks');
var randToken = require('rand-token');
var _ = require('underscore');

var config = require('../config');

class EmailService {

  constructor() {

  }

  getTemplate(templateName) {
    var templateFile = path.resolve(__dirname, '..', '.heml', templateName);
    return fs.readFileSync(templateFile).toString();
  }
  async sendEmail(obj) {

  }
  async sendTemplate(templateName, obj) {

    var obj = _.extend({
      data: {}
    }, obj);

    var template = this.getTemplate(templateName);
    var hemlString = nunjucks.renderString(template, obj.data);

    var hemlOutput = await heml(hemlString);
    obj.subject = hemlOutput.metadata.subject;
    obj.text = hemlOutput.html;

    return this.sendEmail(obj);
  }
}

class AwsSesEmailService extends EmailService {

  constructor() {

    super();

    var awsProfile = 'default';
    var awsRegion = 'us-west-2';

    if (config.SITE.email.hasOwnProperty('awsProfile'))
      awsProfile = config.SITE.email.awsProfile;
    if (config.SITE.email.hasOwnProperty('awsRegion'))
      awsRegion = config.SITE.email.awsRegion;
    this.SES = new aws.SES({
      credentials: new aws.SharedIniFileCredentials({
        profile: awsProfile
      }),
      region: awsRegion
    });
  }

  async sendEmail(obj) {

    var self = this;

    return new Promise(function(resolve, reject) {
      self.SES.sendEmail({
        Destination: {
          ToAddresses: obj.to
        },
        Message: {
          Subject: { Charset: 'UTF-8', Data: obj.subject },
          Body: {
            Html: { Charset: 'UTF-8', Data: obj.text }
          }
        },
        Source: obj.from
      }, function(err, data) {
        if (err) reject(err);
        else resolve(data);
      });
    });
  }
}

class ConsoleEmailService extends EmailService {
  async sendEmail(obj) {
    console.log(`FROM: ${obj.from}`)
    console.log(`TO: ${obj.to.join(', ')}`);
    console.log();
    console.log(obj.subject);
    console.log();
    console.log(obj.text);
  }
}

class HtmlEmailService extends EmailService {
  async sendEmail(obj) {
    fs.ensureDirSync(path.join(__dirname, '..', '.tmp'));
    fs.writeFileSync(
      path.resolve(__dirname, '..', '.tmp', `email ${moment().format('x')} ${randToken.generate(8)}.html`),
      obj.text
    );
  }
}

const EMAIL_SERVICES = {
  AwsSesEmailService: AwsSesEmailService,
  ConsoleEmailService: ConsoleEmailService,
  HtmlEmailService: HtmlEmailService
};

module.exports = new EMAIL_SERVICES[config.SITE.email.serviceName]();
