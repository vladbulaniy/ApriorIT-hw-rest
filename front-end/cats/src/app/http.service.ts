import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
// import {CookieService} from 'angular2-cookie/core';

@Injectable()
export class HttpService {

  constructor(
    private http: Http,
    private Response: Response,
  // private _cookieService: CookieService
  ) { }

  // getCookie(key: string) {
  //   return this._cookieService.get(key);
  // }
  // putCookie(key: string, value: string) {
  //   return this._cookieService.put(key, value);
  // }
}
