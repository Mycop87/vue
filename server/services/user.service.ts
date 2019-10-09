export {};
import { IUser } from '../interfaces/user.interface';
const DataBaseService = require('../services/data-base.service');
const AuthService = require('../services/auth.service');

class UserService {
  async getUserById(id: string): Promise<IUser> {
    const result = await DataBaseService.getDocument('users', { '_id': id });
    return result;
  }

  async getUsers(): Promise<IUser[]>  {
    const users = await DataBaseService.getDocuments('users');
    return users.map((user: any) => {
      return {
        ...user,
        password: '',
      };
    });
  }

  async createUser (data: any): Promise<any> {
    const existUser = await DataBaseService.getDocument('users', { email: data.email });
    if (existUser) {
      return {
        error: {
          status:  400,
          message: 'user with target user name already exist',
        },
      };
    }
    const hash   = await AuthService.getHash(data.password);
    const result = await DataBaseService.insertDocument('users', {
      email:     data.email,
      password:  hash,
      isDefault: false,
    });
    return {
      ...result,
      password: '',
    };
  }

  async updateUser (data: any) {}

  async deleteUser (data: any) {
    const user = await DataBaseService.getDocument('users', data);
    if(user.isDefault){
      return false
    }
    const result = await DataBaseService.deleteDocument('users', data);
    return result;
  }

  async getUser(searchCriteria: any): Promise<IUser> {
    const user = await DataBaseService.getDocument('users', searchCriteria);
    return user;
  }

}

module.exports = new UserService();
