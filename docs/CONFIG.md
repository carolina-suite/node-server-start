
# Site Configuration #

## Configuration Files #

Site configuration is broken down into two files:

* The `.env` file, not under version control.
* The choice file in the `config/` dir, by default `main.js`.

The `.env` contains a secret key for password hashing as well as an indicator
of what config to use. All other configuration should be in that file.

## Configuration Options #

All configuration in the file should be exported under the `SITE` var.

Other apps are welcome to have other vars be used for configuration.

### Database #

`db`

The database configuration indicates the database to use.

```js
this.SITE = {
  db: {
    host: 'localhost',
    name: 'carolina',
    port: 27017
  }
};
```

### Email #

`email`

An e-mail service should be selected. E-mail configuration indicates
the FROM address for all site e-mails, the choice of e-mail service,
and other possible configuration.

#### Email Service Options #

The options for e-mail service are:

* `AwsSesEmailService`: Sends mail using AWS.
* `ConsoleEmailService`: Print e-mails to the terminal.
* `HtmlEmailService`: Writes e-mails as HTML to the `.tmp/` dir.

If using `AwsSesEmailService`, the `awsProfile` and `awsRegion` must be
specified.

### Log Level #

`logLevel`

Specify the npm level of logging for database logging, file logging, and
console logging.

### Site Name #

`name`

The human-friendly name of the site.

### NPM Static Files #

`npmStaticFiles`

A list of files that should be transferred from `node_modules/` to `site/static`
when the `npm run npm-static` command is executed.
