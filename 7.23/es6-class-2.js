// class Parent {
//   constructor(name) {
//     this.name = name;
//   }
//   getName() {
//     console.log(this.name);
//   }
// }
// class Child extends Parent {
//   constructor(name, age) {
//     super(name);
//     this.age = age;
//   }
// }
// const c = new Child("slim", 24);
// c.getName();
// console.log(c instanceof Child);
// console.log(c instanceof Parent);

// class Parent {
//   constructor(name) {
//     this.name = name;
//   }
//   getName() {
//     console.log(this.name);
//   }
// }
// Parent.st = () => {
//   console.log("static");
// };

// class Child extends Parent {
//   constructor(name) {
//     super();
//     console.log("constructor");
//     super.getName();
//   }
//   getParentName() {
//     console.log("getParentName");
//     super.getName();
//   }
//   static getParentSt() {
//     console.log("getParentSt");
//     super.st();
//   }
// }
// const c = new Child();
// c.getParentName();
// Child.getParentSt();

// class newArray extends Array {
//   constructor(...args) {
//     super(...args);
//   }
// }

// const arr = new newArray(1, 2, 3, 4);
// console.log(arr);
// console.log(arr.join("_"));

class Parent {}
class Child extends Parent {}
console.log(Child.__proto__ === Parent);
console.log(Child.prototype.__proto__ === Parent.prototype);
const p = new Parent();
const c = new Child();
console.log(c.__proto__.__proto__ === p.__proto__);
