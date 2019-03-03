import { Component, OnInit } from '@angular/core';
import { GoogleAuthService } from './google-auth.service';
declare const gapi: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private googleAuthService: GoogleAuthService) {  }

  user: string = null;

  ngOnInit(): void {
    this.googleAuthService.init();
  }

  signIn() {
    this.googleAuthService.signIn();
  }

  signOut() {
    this.googleAuthService.signOut();
  }
}
