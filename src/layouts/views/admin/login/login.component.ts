import { Component, inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  router: Router = inject(Router);

  loginForm: FormGroup;
  username: FormControl;
  password: FormControl;
  initialization = () => {
    this.username = new FormControl('');
    this.password = new FormControl('');
  };
  createForm = () => {
    this.loginForm = new FormGroup({
      username: this.username,
      password: this.password,
    });
  };
  constructor() {
    this.initialization();
    this.createForm();
  }

  signIn = () => {
    console.log('login value', this.loginForm.value);
    this.router.navigate(['/']);
  };
}
