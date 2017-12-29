
# Pug Templates #

The Fastify server is configured to render Pug templates (formerly jade).

Your templates should be in the `apps/<appName>/templates` directory,
which will be copied to `.templates/<appName>/`. Take note of the destination
directory. All imports of other templates should bear in mind the new
location. This makes it easier to import templates of other apps, if that
is desired.
