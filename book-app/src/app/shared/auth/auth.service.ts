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
    console.log("Auto Sign In");

    const userData = JSON.parse(localStorage.getItem(environment.userDataLocalStorageKey) ?? '');

    console.log({userData})

    if (!userData) return;

    const { email, id, _token, _tokenExpirationDate }: UserData = userData;
    const loadedUser = new User(email, id, _token, new Date(_tokenExpirationDate));

    console.log({loadedUser});

    if (loadedUser.token) {
      // NOTE: There may be no subscribers to the currentUser observable causing us to not be auto-signin.
      console.log("Emitting current user");
      this.currentUser.next(loadedUser);
    }
  }


  autoSignOut(expDuration: number) {
    console.log("Expiration Duration: ", expDuration);
    this.tokenExpTimer = setTimeout(this.signout, expDuration)
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
    const expDate = new Date(new Date().getTime() + expiresIn * 1000);

    console.log("Expeiration Date from Auth:", expDate);

    const formUser = new User(email, userId, token, expDate);
    this.currentUser.next(formUser);

    // serialize user
    localStorage.setItem(environment.userDataLocalStorageKey, JSON.stringify(formUser));
    this.autoSignOut(expiresIn * 1000);
  }

  signout() {
    this.currentUser.next(null);

    localStorage.removeItem(environment.userDataLocalStorageKey);
    if (this.tokenExpTimer) clearTimeout(this.tokenExpTimer)

    this.router.navigate(['auth']);
  }
}
