
# Authentication App #

This is an authentication app for managing Users and allowing them to log in
to your site.

## Getting Started #

This app is included with the starter project, so no installation is necessary.

The app is available at `/auth`.

It provides the following functionality:

* User login
* Viewing and editing profile details
* Resetting password
* User registration

This app makes use of the Email Service defined by the site's configuration.

## Docs #

### Mongoose Models #

Feel free to edit these models to suit your needs.

#### Group #

Represents a user group.

**Attributes**

| Attribute | Type | Description |
| --- | --- | --- |
| name | String | A unique name for the group. |
| verboseName | String | A human-friendly version of the name. |
| permissions | List of Permissions | Permissions that all users of the group should have. |
| description | String | A description of the group. |

*Permission*

| Attribute | Type | Description |
| --- | --- | --- |
| name | String | A name for the permission. Important for looking up permissions. |
| verboseName | String | A human-friendly version of the name. |
| description | String | A description of the permission. |

**Methods**

*group.hasPermission(permissionName)*

Parameters:

* `permissionName`: The name of the permission to check if that group has.

Return Value: True if the group has the given permission, false otherwise.

#### User #

**Attributes**

| Attribute | Type | Description |
| --- | --- | --- |
| username | String | A unique username. |
| password | String | The salted and hashed password of the user. |
| salt | String | The salt for the current password. |
| email | String | The user's e-mail address. |
| name | String | The user's name. |
| isAdmin | Boolean | Whether or not the user has admin rights. |
| groups | List of References to Group | Groups that this user is a member of. |
| imageUrl | String | A url to a profile image for the user. |

**Methods**

*user.setPassword(password)*

Generates a salt and hashes the password, setting the user's password and salt
attributes.

Parameters:

* `password`: The new desired password.

*user.checkPassword(password)*

Checks a given password.

Parameters:

* `password`: The password to check.

Return Value: True if the password matches, false otherwise.

*user.generateJwtToken(secret)*

Generates a JWT token given a secret.

Parameters:

* `secret`: A key for generating the JWT token.

Return Value: A current JWT token for the user.

*user.addGroups(groupNames)* **Async**

Adds the user to the given groups.

Parameters:

* `groupNames`: A list of group names to add to the user.

*user.hasPermission(permissionName)*

Checks whether or not the user has a permission with the given name.

Parameters:

* `permissionName`: The permission to check for.

Return Value: True if any group the user belongs to has that permission, false otherwise.

### API #

Most endpoints are designed only for use by this app, but the following
endpoints are available for broader site use:

**Check Login**: `/auth/api/check`

Checks whether or not the user is logged in.

Request Data:

* `carolinaToken`: A JWT token.

Response Data:

* `success`: True if the JWT token is valid, false otherwise.
* `message`: Reason success if false. Only present if success is false.

### Fastify Middleware #

#### API Auth Check #

A middleware guard that allows requests with a valid `carolinaToken` to pass,
and rejects all other requests.

Designed for use as a Fastify "beforeHandler".

**Example**

```js
var apiAuthCheck = require('../path/to/auth/middleware/api-auth-check');

function fastifyMiddleware(fastify, options, next) {
  // endpoint for users only
  fastify.post('/inventory', { beforeHandler: [apiAuthCheck] }, handler);
}
```

#### API Admin Check #

A middleware guard that allows requests with a valid `carolinaToken` for an
admin user to pass,
and rejects all other requests.

Designed for use as a Fastify "beforeHandler" and for use alongside `apiAuthCheck`.

`apiAuthCheck` should happen before `apiAdminCheck`.

**Example**

```js
var apiAuthCheck = require('../path/to/auth/middleware/api-auth-check');
var apiAdminCheck = require('../path/to/auth/middleware/api-admin-check');

function fastifyMiddleware(fastify, options, next) {
  // endpoint for admin users only
  fastify.post('/admin-inventory', { beforeHandler: [apiAuthCheck, apiAdminCheck] }, handler);
}
```

### HEML Templates #

#### Password Reset #

An e-mail template for e-mails resetting the user's password.

### Frontend Services #

#### CarolinaAuth #

A service for working with authentication. Most of its methods or just for use
within the auth app, but some of them are for broader site use.

When you include the file, it is constructed and it checks the local
environment for an existing token.

Usage Example:

```js
import { CarolinaAuth } from '../path/to/auth/src/react/lib/CarolinaAuth';

async function isLoggedIn() {
  return await CarolinaAuth.authCheck();
}
```

**CarolinaAuth.authPost(url, data, redirectPath)** (ASYNC)

Sends a JSON POST request automatically including the token if the user is logged
in.

Parameters:

* `url`: The url to POST to.
* `data`: An object to send as the JSON body (optional).
* `redirectPath`: A path to redirect the user to if the request fails (user not logged in). Optional.

Returns: The body of the response.

**CarolinaAuth.authCheck()** (ASYNC)

Checks if there is a user token that is valid.

Return Value: True if the user is logged in with a valid token, false otherwise.

## Acknowledgements #

### Authors #

* John F Marion

### Built With #

* Axios
* ReactJs
