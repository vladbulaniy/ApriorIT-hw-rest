import { Component, OnInit } from '@angular/core';
import {Http, Response} from '@angular/http';
import {CookieService} from 'angular2-cookie/core';

const serverUrl = 'http://localhost:3000';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  response: any;
  catsArr: any;
  visible: boolean;
  catObj: any;
  constructor(
    private http: Http,
    private _cookieService: CookieService
  ) { }

  ngOnInit() {
    this.visible = false;
    // console.log('token = ', this.getCookie( 'token'));
    const req = this.http.get(serverUrl + '/cats');
    req.subscribe(data => {
      console.log('response = ', data);
      this.response = data;
      this.catsArr = JSON.parse(this.response._body);
      console.log('response = ', this.catsArr);
    });
  }
    getCookie(key: string) {
    return this._cookieService.get(key);
  }
  change(data) {
    this.visible = true;
    this.catObj = data;
    console.log('cat obj = ', data);
  }
  add() {
    this.visible = true;
  }
  onChange
}
