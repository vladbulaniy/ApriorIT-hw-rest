import { Input, Component, OnInit, Output } from '@angular/core';
import {Http, Response} from '@angular/http';
import {CookieService} from 'angular2-cookie/core';

const serverUrl = 'http://localhost:3000';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  @Input() visible: boolean;
  @Input() catObj: any;
  @Output() onChanged: any;
  selectedBreeds: any;
  breeds: any;
  outCatObj: any;
  catName: any;
  response: any;
  constructor(
    private http: Http,
    private _cookieService: CookieService
  ) { }

  ngOnInit() {
    this.catName = this.catObj.name;
    this.outCatObj = {};
    // this.values = ['British', 'Persian', 'Sphinx'];
    this.breeds = [{'name': 'British'}, {'name': 'Persian'}, {'name': 'Sphinx'}];
    this.selectedBreeds = this.breeds[0];
  }
  putCookie(key: string, value: string) {
    return this._cookieService.put(key, value);
  }
  cancel() {
    this.visible = !this.visible;
    console.log('this.visible =', this.visible);
    console.log('this.cat =', this.catObj);
  }
  onChange(breed) {
    this.catObj.breed = breed.name;
    console.log(breed.name);
  }
  onChangeName(name) {
    this.catObj.name = name;
  }
  onChangeAge(age) {
    this.catObj.age = age;
  }
  changed() {
    this.onChange = this.catObj;
  }
  save() {
    const req = this.http.put(serverUrl + '/cats/' + this.catObj.id, this.catObj);
    req.subscribe(data => {
      console.log('response = ', data);
      this.response = data;
      console.log('response = ', this.response);
      // this.token = this.response._body;
      // console.log('response = ', this.token);
      // this.putCookie( 'token', this.token);
      // console.log('token = ', this.getCookie( 'token'));
    });
  }

}
