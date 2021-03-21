import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { AuthData } from './auth-data.model';

const BACKEND_URL = '';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private token = '';
  private isAuthenticated = false;
  private authStatusListener = new Subject<boolean>();
  private userId = '';
  private tokenTimer: any;

  constructor(private http: HttpClient, private router: Router) {}

  getToken() {
    return this.token;
  }

  getIsAuth() {
    return this.isAuthenticated;
  }

  getfakeIsAdmin() {
    const promise = new Promise((resolve) => {
      setTimeout(() => {
        resolve(true);
      }, 800);
    });

    return promise;
  }

  getAuthStatusListener() {
    return this.authStatusListener.asObservable();
  }

  getUserId() {
    return this.userId;
  }

  setAuthTimer(duration: number) {
    this.tokenTimer = setTimeout(() => {
      this.logoutUser();
    }, duration * 1000);
  }

  createUser(email: string, password: string) {
    const authData: AuthData = { email, password };
    this.http.post<{ token: string; expiresIn: number; userId: string }>(BACKEND_URL + '/singup', authData).subscribe(
      (response) => {
        if (response.token) {
          this.isAuthenticated = true;
          this.token = response.token;
          this.authStatusListener.next();
          this.userId = response.userId;

          const now = new Date();
          const expiresInDuration = response.expiresIn;
          this.setAuthTimer(expiresInDuration);
          const expiratonDate = new Date(now.getTime() + expiresInDuration * 1000);

          this.saveAuthData(this.token, expiratonDate, this.userId);

          this.router.navigate(['/']);
        }
      },
      (error) => {
        this.authStatusListener.next(false);
      }
    );
  }

  loginUser(email: string, password: string) {
    const authData: AuthData = { email, password };
    this.http.post<{ token: string; expiresIn: number; userId: string }>(BACKEND_URL + '/login', authData).subscribe(
      (response) => {
        if (response.token) {
          this.isAuthenticated = true;
          this.token = response.token;
          this.authStatusListener.next(true);
          this.userId = response.userId;

          const now = new Date();
          const expiresInDuration = response.expiresIn;
          this.setAuthTimer(expiresInDuration);
          const expiationDate = new Date(now.getTime() + expiresInDuration * 1000);

          this.saveAuthData(response.token, expiationDate, this.userId);

          this.router.navigate(['/']);
        }
      },
      (error) => {
        this.authStatusListener.next(false);
      }
    );
  }

  autoAuthUser() {
    const authInformation = this.getAuthData();
    if (!authInformation) {
      return;
    }

    const now = new Date();
    const expiresIn = authInformation.expirationDate.getTime() - now.getTime();
    if (expiresIn > 0) {
      this.token = authInformation.token;
      this.isAuthenticated = true;
      this.authStatusListener.next(true);
      this.setAuthTimer(expiresIn / 1000);
    }
  }

  logoutUser() {
    this.isAuthenticated = false;
    this.token = null;
    this.userId = null;
    this.clearAuthData();
    this.authStatusListener.next(false);
    this.router.navigate(['/']);
  }

  // save the data in the local storage so that it is persisten
  private saveAuthData(token: string, expiationDate: Date, userId: string) {
    localStorage.setItem('token', token);
    localStorage.setItem('expiration', expiationDate.toISOString());
    localStorage.setItem('userId', userId);
  }

  private getAuthData() {
    const token = localStorage.getItem('token');
    const expirationDate = localStorage.getItem('expiration');
    const userId = localStorage.getItem('userId');
    if (!token || !expirationDate || !userId) {
      return false;
    }
    return {
      token,
      expirationDate: new Date(expirationDate),
    };
  }

  private clearAuthData() {
    localStorage.removeItem('token');
    localStorage.removeItem('expiration');
    localStorage.removeItem('userId');
  }
}
