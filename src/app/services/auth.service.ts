import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // /!\ encapsulation with private  (for more security)!
  loggedIn = false;

  constructor(private http: HttpClient, private router: Router) {
    console.log('Creating AuthService');
    if(this.getToken()) {
      // check validity on backend or inside getToken
      this.loggedIn = true;
      // TODO: redirect ?
    }
  }

  login(email: string, password: string): void {
    this.http.post(`http://localhost:3000/auth/login`, { username: email, password } )
      .subscribe((responseBody: any) => {
        if(responseBody.hasOwnProperty('access_token')){
          this.loggedIn = true;
          this.storeToken(responseBody.access_token);
          this.profile();
          this.router.navigateByUrl('/home');
        }
      })
  }

  profile(): void {
    this.http.get(`http://localhost:3000/auth/profile`)
      .subscribe((responseBody: any) => {
        console.log('XXXXX', responseBody)
      });
  }

  private storeToken(token: string) {
    //  /!\ Cookies secure for more security
    localStorage.setItem('token', token);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  // storeUser / getUser...
}
