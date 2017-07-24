/*const x = 6;
x = 7; // ERROR!




let x = 1;
{
    let y = 2;
//    console.log(y);
}

for (var i=0;i<5;i++){
    // i ����� ����� ���� ��� �����
     k = i;// k ���� ����� ����� ��� �����
}
for (let i=0;i<5;i++){
    // i ����� ����� ������ � �����
     }

var arr=[];
for (var i=0;i<3;i++){
    arr[i] = function(){console.log(i); }
     }
arr[0]();//3
arr[1]();//3
arr[2]();//3


var arr=[];
for (var i=0;i<3;i++){
        ( function(i){
            arr[i] = function(){console.log(i); }
        } )(i);    
     }
     
arr[0]();//3
arr[1]();//3
arr[2]();//3


let foo = x => x*10;
//analog
let foo = function (x){return x*10;}
// if x more then one =>
let foo = (x,y) => x+y*10;
// and if parametrs are null =>
let foo = () => x+y*10;

[1,2,3,4,5].forEach(v => console.log(v*10));



// before
let obj = {
    nums: [1,2,3,4,5],
    tens: [],
    each: function (){
        var self = this;
        this.nums.forEach(function(v){
            self.tens.push(v*10);
        }.bind(this))
    }
}

obj.each();
// after
let obj = {
    nums: [1,2,3,4,5],
    tens: [],
    each: function (){
        this.nums.forEach( (v) => {this.tens.push(v*10)} )
    }
}

obj.each();


//���������� ���������� �� ���������
function foo (x, y=2, z = 3){
    console.log(x+y+z);
}

foo(2,4,10);



function foo (x, y, ...a){
    //var a = Array.prototype.slice.call(arguments,2);
    console.log(a);    
}

foo(1,2,3,4,5);
//����� ������� ������ �� ���� 2 ������������ ���������, � ��������� � �������������� ����������� �������� ��� ������ � �


var p = ['a', 'b', 'c'];
var x = [1, 2, ...p];
console.log(x); //[1, 2, "a", "b", "c"]
var s = "hello";
var a = [...s];
console.log(a); //["h", "e", "l", "l", "o"]


var name = 'John', age = 25;
var s = `Hello ${name}.${age + 1}`;
console.log(s); //Hello John.26



var x=1, y=2;
var obj = {x, y};
console.log(obj.x);// ���� ����� �� ���������� ��� ��������� - �� �������� ������������� �������������


var [a, b, c] = [1, 2, 3];
console.log(a, b, c);// 1, 2, 3
[a, c] = [c, a]
console.log(); // 3 1


let x = Symbol('this is x'); // ��������� ����� ��� ������ Symbol. ����� ������������, ���� ���� �������� 100% ���������� ���� � �������


let m = new Map();
m.set("name", "John");
m.set("age", 25);
console.log(m.size);//2
console.log(m.get('name')); //John 
let s = new Set();
s.add(1).add(2).add(3).add(2);
console.log(Array.from(s));//[1, 2, 3]



// ������
class Shape{
    constructor(x,y){
        this.x = x; //����������� ��� �������� �������
        this.y = y;
    }
    move (x,y){this.x = x; this.y = y;} // ������ ����� (�� ��������� � � � ����� ��������)
}
let s = new Shape(10, 20); //
console.log(s);// 10, 20
s.move (30, 40);
console.log(s); //30,40

class Rect extends Shape{ // �������������� �����
    constructor(x, y, w, h){
        super(x, y)//���� �������� �� ������������� ������� Shape
        this.w = w; //����������� ��� ����� ��������
        this.h = h;
    }
}

let r = new Rect(10, 20, 100, 200);
console.log(r);//  Rect {x: 10, y: 20, w: 100, h: 200}






*/

// set-���� � get-����
class User{
    constructor(){this.name = '';}
    set name (n) {this._name = n.toUpperCase(n)}
    get name () {return this._name}
}
let u = new User();
u.name = "John";
console.log(u.name);



console.log();



const ar = 34;
console.log (ar.__proto__)



var test = document.getElementById('myDate');
var click = document.getElementById('click');
click.onclick = function () {
  console.log(test.value)
}
var start = new Date();
var end = new Date(2017, 06, 20);
console.log('start = ', start, 'end = ', end);
var c = end-start;
var diffD = Math.floor((end.getTime() - start.getTime()) / 24/  60 / 60 / 1000)
var diffH = Math.floor((end.getTime() - start.getTime()) /  60 / 60 / 1000)
if (diffD){
  console.log('c = ', diffD, 'D');
} else {
  console.log('c = ', diffD, 'D' , diffH, 'h');
}
