import { Input, Component, OnInit, Output } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
    this.catName = this.catObj.name;
    this.outCatObj = {};
    // this.values = ['British', 'Persian', 'Sphinx'];
    this.breeds = [{'name': 'British'}, {'name': 'Persian'}, {'name': 'Sphinx'}];
    this.selectedBreeds = this.breeds[0];
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
  changed () {
    this.onChange = this.catObj;
  }

}
