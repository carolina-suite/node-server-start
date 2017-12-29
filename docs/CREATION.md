
# App Creation #

You can create your own apps by creating directories directly under `apps/`.

If you create a directory `apps/blog`, the app will be mounted at `/blog`.

Apps must, at a minimum, have an `index.js` file (but it can be blank).
That file will be run when the site is started up, so it is a good place
to put any `setTimeout` function you want going on.
