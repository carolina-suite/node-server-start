
import CarolinaAuth from '../../../../auth/src/react/lib/CarolinaAuth';

class AdminLib {
  async getApps() {
    return await CarolinaAuth.authPost('/admin/api/list-apps');
  }
  async createObject(model, object) {
    return await CarolinaAuth.authPost(`/admin/api/create-object/${model}`, {
      obj: object
    });
  }
  async getObjects(model, page) {
    return await CarolinaAuth.authPost(`/admin/api/list-objects/${model}/${page}`);
  }
  async getModelTemplate(model) {
    return await CarolinaAuth.authPost(`/admin/api/get-object-start/${model}`);
  }
  async getObject(model, id) {
    return await CarolinaAuth.authPost(`/admin/api/get-object/${model}/${id}`);
  }
  async updateObject(model, id, update) {
    if (update.hasOwnProperty('_id')) delete update._id;
    if (update.hasOwnProperty('__v')) delete update.__v;
    return await CarolinaAuth.authPost(`/admin/api/update-object/${model}/${id}`, {
      update: update
    });
  }
  async deleteObject(model, id) {
    return await CarolinaAuth.authPost(`/admin/api/delete-object/${model}/${id}`);
  }
}

var AdminService = new AdminLib();
export default AdminService;
