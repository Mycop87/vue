import axios from 'axios';
import { environment } from '@/environments/environment.ts';
import { ICredentials } from '@/interfaces/auth.interface.ts';



export class UserService {
  public fetchUsers() {
    return axios.get(`${environment.API_URL}users`);
  }

  public createUser(credentials: ICredentials) {
    return axios.post(`${environment.API_URL}users/`, credentials);
  }

  public deleteUser(userId: string) {
    return axios.delete(`${environment.API_URL}users?id=${userId}`);
  }
}
