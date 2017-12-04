
## Overview #

### Install #

`npm install`

`npm install -g webpack`

### Initialize #

`npm run initialize`

Creates the `.env` file with a secret if `.env` does not exist.

### Copy Static Files from `node_modules` #

If you suspect npm install gave a newer version of some files you want in
your project, run:

`npm run npm-static`

It will follow the specification in your config file.

### Load Fixtures #

You can load fixtures this way.

`npm run fixture {fixtureName}`

Loads a fixture into the database. For example, `npm run fixture myfix` will
load a fixture defined in `fixtures/myfix.js`.


### Build Js #

`npm run js`

Builds your js with webpack.

### Build Tailwind CSS #

`npm run tailwind`

Builds your tailwind css for all apps that have a `tailwind` dir.

The `tailwind` dir must contain `tailwind.js` and `style.css`.

## App Components #

* `lib/`: Library of your own utilities.
* `middleware`: Fastify middleware.
* `models`: `models/index.js` must expose all your mongoose models if this directory exists.
* `routes`: `routes/index.js` must expose a fastify router to use.
* `src`: A good place for your js files.
* `tailwind`: Tailwind config in `tailwind/tailwind.js` and styles in`tailwind/styles.css`.
* `webpack.js`: Exports to include in the site's webpack build.
* `index.js`: Required but can be blank. Will be ran whenever the site is
started, so its good place to put `setInterval` entries.

## Configuration #

### Email #

Choose an e-mail service:

* `ConsoleEmailService`: Prints all e-mails to the terminal.
* `HtmlFileEmailService`: Writes all e-mails to HTML files in `.tmp`.
* `AwsSesEmailService`: Requires the AWS options to be supplied and correct.

## Other Notes #

Bring your own admin like:

* [MongoExpress](https://www.npmjs.com/package/mongo-express)
* [MongoUi](https://www.npmjs.com/package/mongoui).
* [RoboMongo](https://robomongo.org)

A really bad one is partially done at `/admin`, but you can safely delete the
`apps/admin` directory.
