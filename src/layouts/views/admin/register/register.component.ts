import { Component, inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  router: Router = inject(Router);

  registerForm: FormGroup;
  username: FormControl;
  email: FormControl;
  password: FormControl;
  confirmPassword: FormControl;
  initialization = () => {
    this.username = new FormControl('');
    this.password = new FormControl('');
    this.email = new FormControl('');
    this.confirmPassword = new FormControl('');
  };
  createForm = () => {
    this.registerForm = new FormGroup({
      username: this.username,
      email: this.email,
      password: this.password,
      confirmPassword: this.confirmPassword,
    });
  };
  constructor() {
    this.initialization();
    this.createForm();
  }

  signUp = () => {
    console.log('register value', this.registerForm.value);
    this.router.navigate(['/']);
  };
}
