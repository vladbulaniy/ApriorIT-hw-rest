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
  @Input()  catsArr: any;
  @Output() onChanged: any;
  selectedBreeds: any;
  breeds: any;
  newCatObj: any;
  catName: any;
  catAge: any;
  catBreed: any;
  response: any;
  Age: any;
  constructor(
    private http: Http,
    private _cookieService: CookieService
  ) { }

  ngOnInit() {
    if (this.catObj){
      this.catName = this.catObj.name;
      this.visible = true;
    }
    console.log(this.catAge);
    // this.newCatObj = {};
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
  }
  onChange(breed) {
    if (this.catObj) {
      this.catObj.breed = breed.name;
      console.log(breed.name);
    } else {
      this.catBreed = breed.name;
    }
  }
  onChangeName(name) {
    if (this.catObj) {
      this.catObj.name = name;
    } else {
      this.catName = name;
    }
  }
  onChangeAge(age) {
    if (this.catObj) {
      this.catObj.age = age;
    } else {
      this.catAge = age;
    }
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
    });
  }
  add() {
    this.newCatObj = {
      name: this.catName,
      age: this.catAge,
      breed: this.catBreed
    }
    console.log('this.newCatObj = ', this.newCatObj)
    if (!this.newCatObj.name){
      alert('Please enter Cats name');
    } else {
      if (!this.newCatObj.age){
        alert('Please enter Cats age');
      } else {
        if (!this.newCatObj.breed){
          alert('Please choose Cats breed');
        } else {
          const req = this.http.post(serverUrl + '/cats/', this.newCatObj);
          req.subscribe(data => {
            console.log('response = ', data);
            this.response = data;
            console.log('response = ', this.response);
          });
        }
      }
    }
    this.visible = !this.visible;
  }

}
