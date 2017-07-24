import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, Headers, Http, Response } from '@angular/http';
import { CookieService } from 'angular2-cookie/services/cookies.service';
// import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from "@angular/router";
// import {Observable} from "rxjs/Rx";
// import {Http, Response} from '@angular/http';

import {Routes, RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { FormComponent } from './form/form.component';
import {HttpClientModule} from '@angular/common/http';
import {HomeGuard} from "./home.guard";

// const itemRoutes: Routes = [
//   { path: 'home', component: HomeComponent}
// ];

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
    // children: itemRoutes
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [HomeGuard]
  },
  {
    path: 'error',
    component: ErrorComponent
  },
  {
    path: '**', redirectTo: '/error'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    ErrorComponent,
    HomeComponent,
    LoginComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: [CookieService, HomeGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
