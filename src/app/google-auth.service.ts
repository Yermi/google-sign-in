import { Injectable } from '@angular/core';

declare const gapi: any;

@Injectable({
  providedIn: 'root'
})

export class GoogleAuthService {

  constructor() { }

  InitGoogleAuth2Object : object = {
    client_id: '<YOUR-CLIENT-ID>',
    cookiepolicy: 'single_host_origin',
    scope: 'profile email'
  }

  public init() {
    console.log("init googleAuth")
    gapi.load('auth2', () => {
      gapi.auth2.init(this.InitGoogleAuth2Object).then((GoogleAuth) => {
        console.log(GoogleAuth);
      }).catch((error) => {
        console.log(error);
      })
    })
  }

  public signIn() {
    gapi.auth2.getAuthInstance().signIn({}).then((GoogleUser) => {
      console.log("sign-in successed")
      console.log(GoogleUser);
      console.log(GoogleUser.getAuthResponse());
      console.log(GoogleUser.getBasicProfile());
    }).catch((error) => {
      console.log(error.error)
    })
  }


  public signOut() {
    gapi.auth2.getAuthInstance().signOut().then(() => {
      console.log("signOut")
    });
  }

  getCurrentUser() : string {
    return gapi.auth2.getAuthInstance().currentUser.get();
  }

  getAccessTokenOfCurrentUser(): string {
    return gapi.auth2.getAuthInstance().currentUser.get().getAuthResponse(true).access_token;
  }

  getProfile(): Profile {
    return gapi.auth2.getAuthInstance().currentUser.get().getBasicProfile();
  }
}

export class Profile {
  Eea: string; // google ID
  Paa: string; // imageUrl
  U3: string; // email
  ig: string; // full name
  ofa: string; // first name
  wea: string; // last name
}
