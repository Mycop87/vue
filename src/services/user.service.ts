import { environment } from '@/environments/environment.ts';
import { IUser } from '@/interfaces/user.interface.ts';
import { HttpService } from '@/services/http.service.ts';


export class UserService {
  public store: any;
  private httpService: any;

  constructor(store: any) {
    this.httpService = new HttpService(store);
    this.store = store;
  }

  public fetchUsers() {
    return this.httpService.get(`${environment.API_URL}users`);
  }

  public createUser(user: IUser) {
    return this.httpService.put(`${environment.API_URL}users/`, user);
  }

  public deleteUser(userId: string | number) {
    return this.httpService.delete(`${environment.API_URL}users?id=${userId.toString()}`);
  }

  public updateUser(user: IUser) {
    return this.httpService.put(`${environment.API_URL}users/`, user);
  }
}
