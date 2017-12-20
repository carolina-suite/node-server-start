
# Running the Site #

## Run Options #

There are two ways to run your site:

* `npm run dev`: Builds frontend stuff from scratch and runs the server.
* `node run`: Runs the server.

### Frontend Build #

The first option does to things before doing the general run process:

#### Build Tailwind Files #

For any apps that have a `tailwind/` directory in them, the dev process uses
a `style.css` and `tailwind.js` file to create a `.static/css/{appName}.css`
file.

#### Run Webpack #

For any apps with a `webpack.js` file defining builds, the dev process creates
a `.static/js/{filename}.js` file.

## The Run Process #

The build process does the following things:

* Ensures that the `.heml` directory exists.
* Ensures that the `.static` directory exists.
* Ensures that the `.templates` directory exists.
* Registers the mongoose models from each app.
* Copies the heml e-mail templates from the app's `heml/` dir to `.heml/{appName}/`.
* Copies the app's `static/` dir to `.static/{appName}/`.
* Copies the app's `templates/` dir to `.templates/{appName}/`.
* Loads routes from all apps.
* Runs each app's `index.js` file.
* Copies the `site/static/` dir if it exists to `.static/SITE/`.
* Copies the `site/templates/` dir if it exists to `.templates/SITE/`.
* Tells to server to serve the `.static/` dir at `/static/`.
* Sets the home route to whatever is exported by `site/home.js`.
* Adds a handler to log incoming requests.
* Begins listening on port 8001.
