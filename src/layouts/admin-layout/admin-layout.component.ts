import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrl: './admin-layout.component.css',
})
export class AdminLayoutComponent {
  FormsClass: boolean = false;
  authClass: boolean = false;
  sideBar: boolean = true;

  toggleFormsBar = () => {
    this.FormsClass = !this.FormsClass;
  };

  toggleAurhBar = () => {
    this.authClass = !this.authClass;
  };
  toggleSideBar = () => {
    this.sideBar = !this.sideBar;
    console.log('sideBar', this.sideBar);
  };
}
