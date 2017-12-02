
# Admin App #

## Usage #

The admin page (`/admin`) gives your the ability to create, read, update, and
delete objects for your models.

## Configuration #

* Define models with a `getAdminDisplayName` method that returns a string
representing the object in the admin list (otherwise, the id will be used).
* Define models with a static `getAdminTemplate` method that returns a starter
object for users create a new object (otherwise, a blank object will be used).
