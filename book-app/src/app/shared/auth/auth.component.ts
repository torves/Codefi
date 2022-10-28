import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { AuthResponseData } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent implements OnInit {
  isLoginMode = true;
  errMsg: string = '';
  authObsrv: Observable<AuthResponseData> = new Observable();

  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit(): void {}

  onSwitchAuthMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  onAuthFormSubmit(form: NgForm) {
    console.log('Submit login form...');
    console.log(form.value);

    if (!form.valid) return;

    this.errMsg = '';

    const { email, password } = form.value;
    if (this.isLoginMode) {
      this.authObsrv = this.auth.login(email, password);
    } else {
      this.authObsrv = this.auth.signup(email, password);
    }

    this.authObsrv.subscribe({
      next: (res) => {
        console.log('Auth Response Success:', res);
        // manually redirect user to bookshelf page
        this.router.navigate(['bookshelf']);
      },
      error: (err) => {
        console.error('Auth Response Error:', err);
        this.errMsg = err.message;
      },
    });

    form.reset();
  }
}
