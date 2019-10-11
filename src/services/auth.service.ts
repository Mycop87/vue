import { environment } from '@/environments/environment.ts';
import { HttpService } from '@/services/http.service.ts';

export class AuthService {
  public store: any;
  private httpService: any;

  constructor(store: any) {
    this.httpService = new HttpService(store);
    this.store = store;
  }

  public get token(): string | null {
    return window.sessionStorage.getItem('token');
  }

  public login(email: string, password: string ) {
    return this.httpService.post(`${environment.API_URL}auth/login`, {
      email,
      password,
    });
  }

  public logout(): void {
    window.sessionStorage.removeItem('token');
  }

  public setToken(token: string): void {
    window.sessionStorage.setItem('token', token);
  }
}
