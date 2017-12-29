
# Node Js Server #

This is the "node-server" starter project used by the
[Carolina CLI](https://github.com/jfmario/node-server-start).

It provides a template for a Node.js server that uses
[MongoDB](https://www.mongodb.com/),
the [Mongoose ODM](http://mongoosejs.com/),
a [Fastify](https://github.com/fastify/fastify) web server,
[ReactJs](https://reactjs.org/) and
[Webpack](https://webpack.js.org/) for the front-end.

It includes an app for authentication.

## Getting Started #

Use this repository as a starting point for full-stack Javascript applications.

### Installation #

#### Creating the Project #

**Via Carolina**

`carolina new node-server {projectName}`

**Via Git**

`git clone https://github.com/carolina-suite/node-server-start {projectName}`

#### Installing Dependencies #

After creating the project, navigate into the new directory and run
`npm i` to install dependencies.

**Webpack**

You will also want to install webpack globally.

`npm i -g webpack`

#### Initialize #

Run `npm run initialize` to create a `.env` file with a secret if one
does not already exist.

### Usage #

**Load Users**

This project comes with a fixture called `auth-test-users`. To load it into
the database, ensure that that Mongo is running and then run:

`npm run fixture auth-test-users`

**Run**

Run the following command to start the dev server:

`npm run dev`

It does the following three things:

* Builds any tailwind css files (which is part of the temporary admin app)
* Builds any webpack files
* Runs the server on port 8001

## Docs #

See the [Docs](./docs/).

## Misc #

Allow node to bind port 80:

```
sudo setcap 'cap_net_bind_service=+ep' `which node`
```

## Acknowledgements #

### Authors #

* John F Marion
