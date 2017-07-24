import {CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs/Rx';
import {Http, Response} from '@angular/http';
import {CookieService} from 'angular2-cookie/core';

import {LoginComponent} from './login/login.component';
import {ApiService} from './api.service';

export class HomeGuard implements CanActivate {
  private Api: ApiService;
  private http: Http;
  private _cookieService: CookieService;
  private test: any;
  index: boolean;
  // constructor(
  //   private http: Http,
  //   private _cookieService: CookieService
  // ) {}


/*
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : Observable<boolean> | boolean {
      this.index = true;
    console.log(this._cookieService);
  //     if (this._cookieService.get('token')) {
  //   console.log('work');
  // }else {
  //   console.log('not work');
  // }
    return this.index;
  }
*/
canActivate() {
  console.log('srbrsbs =', this.Api);

  this.index = true;
  return this.index;
}
show() {
  console.log('srbrsbs =', this._cookieService);
}
}
