import { Component, OnInit } from '@angular/core';
import {Http, Response} from '@angular/http';
import {CookieService} from 'angular2-cookie/core';

const serverUrl = 'http://localhost:3000';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
password: string;
userName: string;
outObj: any;
token: any;
response: any;
  constructor(
    private http: Http,
    private _cookieService: CookieService
  ) { }

  ngOnInit() {
  }

  getCookie(key: string) {
    return this._cookieService.get(key);
  }
  putCookie(key: string, value: string) {
    return this._cookieService.put(key, value);
  }
  check () {
    console.log('ahaet', this.password);
    console.log('ahaet', this.userName);
    this.outObj = {
      username: this.userName,
      password: this.password
    }
    console.log('outObj === ', this.outObj);

    const req = this.http.post(serverUrl + '/auth', this.outObj);
    req.subscribe(data => {
      console.log('response = ', data);
      this.response = data;
      this.token = this.response._body;
      console.log('response = ', this.token);
      this.putCookie( 'token', this.token);
      console.log('token = ', this.getCookie( 'token'));
    });

  }

}
