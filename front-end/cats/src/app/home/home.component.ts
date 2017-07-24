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
  addClick: boolean;
  catObj: any;
  obj: any;
  constructor(
    private http: Http,
    private _cookieService: CookieService
  ) { }

  ngOnInit() {
    this.visible = false;
    this.addClick = false;
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
  putCookie(key: string, value: any) {
    return this._cookieService.put(key, value);
  }
  change(data) {
    this.visible = true;
    this.catObj = data;
    console.log('cat obj = ', data);
  }
  add() {
    this.catObj = false;
    console.log('cat obj = ', this.catObj);
    this.addClick = true;
  }
  delete(id) {
    console.log('this.catObj.id = ', id)
    const req = this.http.delete(serverUrl + '/cats/' + id);
    req.subscribe(data => {
      console.log('response = ', data);
      this.response = data;
      console.log('this.response = ', this.response);
    });
  }

  // putCookie('refresh', refresh())
}
