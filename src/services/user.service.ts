import axios from 'axios';
import { environment } from '@/environments/environment.ts';
import { IUser } from '@/interfaces/user.interface.ts';


export class UserService {
  public fetchUsers() {
    return axios.get(`${environment.API_URL}users`);
  }

  public createUser(user: IUser) {
    return axios.post(`${environment.API_URL}users/`, user);
  }

  public deleteUser(userId: string) {
    return axios.delete(`${environment.API_URL}users?id=${userId}`);
  }
}
