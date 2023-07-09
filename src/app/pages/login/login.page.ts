import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  showQR: boolean = false;
  showCode: boolean = false;
  showForm: boolean = false;
  username: string = '';
  password: string = '';

  constructor() {}

  ngOnInit() {}

  showQRCode() {
    this.showQR = true;
    this.showCode = false;
    this.showForm = false;
  }

  showCodeAvatar() {
    this.showQR = false;
    this.showCode = true;
    this.showForm = false;
  }

  showUsernamePasswordForm() {
    this.showQR = false;
    this.showCode = false;
    this.showForm = true;
  }

  login() {
    // Perform login logic using this.username and this.password
    // Redirect to the desired page or show error message based on login result
  }
}
