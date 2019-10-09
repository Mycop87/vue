export {};
const UserService = require('../services/user.service');
const Error = require('../utils/error');
const ObjectID = require('mongodb').ObjectID;

class UsersController {
  async getUsers (req:any, res:any) {
    let result;
    if (req.query.id) {
        const user = await  UserService.getUserById(req.query.id);
        if(user){
          return  res.status(200).send(user);
        }else{
          return res.status(404).send({ message: 'User not found.' });
        }
    }
    result = await UserService.getUsers();
    if (result) {
      return res.status(200).send(result);
    } else {
      return res.status(500)
                .send({ message: 'Unable create user.' });
    }
  }

  async createUser (req:any, res:any) {
    if (req.body) {
      const result = await UserService.createUser(req.body);
      if (!result.error){
        return res.status(200).send(result);
      } else {
        return res.status(result.error.status).send({ message: result.error.message });
      }
    }
  }

  updateUser (req:any, res:any) {}

  async deleteUser (req:any, res:any) {
    if (req.query.id) {
      const data = {_id: ObjectID(req.query.id)}
      const result = await UserService.deleteUser(data);
      if (result) {
        return res.status(200).send(result);
      } else {
        const error =  Error.getEObject(400, 'can not delete user')
        return res.status(error.error.status).send(error);
      }
    }
  }
}

module.exports = new UsersController();
