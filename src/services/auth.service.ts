import axios from 'axios';
import { environment } from '@/environments/environment.ts';

export class AuthService {
  public get token(): string | null {
    return window.sessionStorage.getItem('token');
  }

  public login(email: string, password: string ) {
    return axios.post(`${environment.API_URL}auth/login`, {
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
