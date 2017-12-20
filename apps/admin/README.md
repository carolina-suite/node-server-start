
# Admin App #

This is an incomplete experimental admin app for Carolina's Node Server
project.

Because it is incomplete and probably deprecated, you may want to consider
using a side server as an admin panel using one of these tools instead:

* [MongoExpress](https://www.npmjs.com/package/mongo-express)
* [MongoUi](https://www.npmjs.com/package/mongoui): My preferred of these options.
* [RoboMongo](https://robomongo.org)

## Getting Started #

This app is included with the starter project, so no installation is necessary.

To use this app, ensure that you have an admin user in the database. Log in
as that user and navigate to `/admin`.

You will be presented with an admin interface allowing you to manage your
database objects.

## Docs #

### API #

All API endpoints in this app require the `carolinaToken` of an admin user
to be send with the request (see the [auth app](../auth/README.md)).

**List Apps**: `/admin/api/list-apps`

Response: Returns a list of apps and associated models.

Sample Response:

```json
[
  { "name": "admin", "models": [] },
  { "name": "auth", "models": ["Group", "User"] }
]
```

**Create Object**: `/admin/api/create-object/:model`

Request Data: The body of the request should have an `obj` key which is an object with all
the data for the object you wish to create.

Response Data: The created object.

Example Route: `/admin/api/create-object/User`

Example Request:

```json
{
  "carolinaToken": "token",
  "obj": {
    "username": "newuser",
    "isAdmin": false
  }
}
```

The response will be the data of the object that was created.

**List Objects**: `/admin/api/list-objects/:model/:page`

Method: GET or POST

Response Data: A list of objects from the database.

Example Route: `/admin/api/list-objects/User/1`

**Get Object Start**: `/admin/api/get-object-start/:model`

Gets the template for create an object of the given model.

Method: GET or POST

Response Data: A starter object that could be edited for creating a new user.
This will be from the model's static `getAdminTemplate` method if
that is defined, otherwise it will be an empty object.

Example Route: `/admin/api/get-object-start/User`

**Get Object**: `/admin/api/get-object/:model/:object`

Look up a certain object by ID.

Method: GET or POST

Response Data: The object from the database by ID.
The object parameter is the MongoDB `_id` of the object.

Example Route: `/admin/api/get-object/User/123456z7890`

**Update Object**: `/admin/api/update-object/:model/:object`

Updates an object in the database.

Method: POST

Request Data:

* `carolinaToken`
* `update`: The entire object you want to update with updates included. Note
that values that are not updated should still be part of the object or else
those values will be lost, since the database record will be overwritten with
the request data.

Response Data: The updated object.

Example Route: `/admin/api/update-object/User/123456z7890`

**Delete Object**: `/admin/api/delete-object/:model/:object`

Removes an object from the database.

Method: POST

Response Data: The deleted object.

Example Route: `/admin/api/delete-object/User/123456z7890`

### Frontend Services #

#### AdminService #

A service for interacting with the API.

File: `/apps/admin/src/react/lib/AdminService.js`

Usage Example:

```js
import { AdminService } from '../path/to/admin/src/react/lib/AdminService';

async function useAdminService() {
  var newObject = await AdminService.createObject('User', {
    username: 'newuser',
    isAdmin: false
  });
  return newObject;
}
```

**Methods**

All the following methods and are "async" and return a Promise.

*AdminService.getApps()*

Return Value: A list of apps with `name` and `models` (a list of models by name associated with the app).

*AdminService.createObject(model, object)*

Parameters:

* `model`: The name of the model.
* `object`: The object to add to the database.

Return Value: The created object.

*AdminService.getObject(model, page)*

Parameters:

* `model`: The name of the model.
* `page`: The page number of objects to return.

Return Value: A list of objects corresponding to the given page number.

*AdminService.getModelTemplate(model)*

Parameters:

* `model`: The name of the model.

Return Value: A template for an object of the given model.

*AdminService.getObject(model, id)*

Parameters:

* `model`: The name of the model.
* `id`: The id of the object to look up.

Return Value: The object matching the given id.

*AdminService.updateObject(model, id, update)*

Parameters:

* `model`: The name of the model.
* `id`: The id of the object to update.
* `update`: The new version of the object to put in the database.

Return Value: The updated object.

*AdminService.deleteObject(model, id)*

Parameters:

* `model`: The name of the model.
* `id`: The id of the object to delete.

Return Value: The deleted object.

### Use with Other Apps #

* Define models with a `getAdminDisplayName` method that returns a string
representing the object in the admin list (otherwise, the id will be used).
* Define models with a static `getAdminTemplate` method that returns a starter
object for users create a new object (otherwise, a blank object will be used).

## Files #

### `routes/` #

The `routes/` dir defines the API for this app.

### `src/` #

The `src/` dir contains all the frontend code for this app.

### `tailwind/` #

The `tailwind/` dir contains the CSS src code for this app.

### `webpack.js` #

The `webpack.js` file defines the Javascript bundle for this app.

## Acknowledgements #

### Authors #

* John F Marion

### Built With #

* ReactJs
