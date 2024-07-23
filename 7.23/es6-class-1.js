// class Point{
//     constructor(x,y){
//         this.x=x;
//         this.y=y
//     }
//     get(){
//         return `(${this.x},${this.y})`
//     }
// }
// const p=new Point(2,8)

// console.log(p)
// console.log(p.get())
// console.log(p.hasOwnProperty('x'))
// console.log(p.hasOwnProperty('get'))
// console.log(p.__proto__.hasOwnProperty('get'))

// var info = {
//   _age: 15,
//   set age(newAge) {
//     console.log("set方法");
//     this._age = newAge;
//   },
//   get age() {
//     console.log("get方法");
//     return this._age;
//   },
// };

// console.log(info.age);
// info.age = 10;

// class Info {
//   constructor(age) {
//     this._age = age;
//   }
//   set age(newAge) {
//     console.log("set方法" + newAge);
//     this._age = newAge;
//   }
//   get age() {
//     // console.log("get方法" + newAge);
//     return this._age;
//   }
// }
// const inf = new Info(18);
// inf.age = 40;
// console.log(inf._age);

// class Point {
//   constructor(name) {
//     this._name = name;
//   }
//   get() {
//     console.log("get");
//     return `${this._name}`;
//   }
//   static getName() {
//     console.log("static");
//     return `${this._name}`;
//   }
// }
// const p = new Point("slim");
// p.get();
// Point.getName();

class Point {
  z = 0;
  constructor(name) {
    this._name = name;
  }
  get() {
    console.log("get");
    return `${this._name}`;
  }
  static getName() {
    console.log("static");
    return `${this._name}`;
  }
}

const p = new Point();
Point.y = 2;
console.log(p.y);
