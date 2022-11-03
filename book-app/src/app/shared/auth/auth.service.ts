import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, tap } from 'rxjs';
import { User } from './user.model';
import { environment } from 'src/environments/environment';

export interface UserData {
  email: string;
  id: string;
  _token: string;
  _tokenExpirationDate: string;
}

export interface AuthResponseData {
  kind: string;
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  // apiKey = "AIzaSyB3BWlF1TFnn8Wj-2EvozR_FKTSW0JGyEM";
  signupUrl = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${environment.firebaseApiKey}`;
  loginUrl = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.firebaseApiKey}`;

  currentUser = new BehaviorSubject<User | null>(null);
  userToken: string = '';

  // FIXME: any type.
  private tokenExpTimer: any;

  constructor(private http: HttpClient, private router: Router) {}

  autoSignIn() {
    const userData = JSON.parse(localStorage.getItem(environment.userDataLocalStorageKey) ?? '');
    if (!userData) return;

    const { email, id, _token, _tokenExpirationDate }: UserData = userData;
    const loadedUser = new User(email, id, _token, new Date(_tokenExpirationDate));

    if (loadedUser.token) {
      this.currentUser.next(loadedUser);
    }
  }

  signup(email: string, password: string) {
    return this.http
      .post<AuthResponseData>(this.signupUrl, {
        email,
        password,
        returnSecureToken: true,
      })
      .pipe(
        tap((res) => {
          const { email, localId, idToken, expiresIn } = res;
          this.handleAuth(email, localId, idToken, Number(expiresIn));
        })
      );
  }

  login(email: string, password: string) {
    return this.http
      .post<AuthResponseData>(this.loginUrl, {
        email,
        password,
        returnSecureToken: true,
      })
      .pipe(
        tap((res) => {
          const { email, localId, idToken, expiresIn } = res;
          this.handleAuth(email, localId, idToken, Number(expiresIn));
        })
      );
  }

  handleAuth(email: string, userId: string, token: string, expiresIn: number) {
    const expDate = new Date(new Date().getTime(), +expiresIn * 1000);
    const formUser = new User(email, userId, token, expDate);
    this.currentUser.next(formUser);

    // serialize user
    localStorage.setItem(environment.userDataLocalStorageKey, JSON.stringify(formUser));
  }

  signout() {
    this.currentUser.next(null);

    localStorage.removeItem(environment.userDataLocalStorageKey);

    this.router.navigate(['auth']);
  }
}
