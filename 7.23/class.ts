// class Point {
//   public x: number;
//   public y: number;
//   constructor(x: number, y: number) {
//     this.x = x;
//     this.y = y;
//   }
//   public getPosition() {
//     return `(${this.x},${this.y})`;
//   }
// }
// const point = new Point(1, 2);
// console.log(point);

// class Parent {
//   public name: string;
//   constructor(name: string) {
//     this.name = name;
//   }
// }
// class Child extends Parent {
//   constructor(name: string) {
//     super(name);
//   }
// }

// class Parent {
//   //   private age: number;
//   protected age: number;
//   constructor(age: number) {
//     this.age = age;
//   }
//   protected getAge() {
//     return this.age;
//   }
// }
// const p = new Parent(29);
// // console.log(p.age)
// // console.log(Parent.age)
// class Child extends Parent {
//   constructor(age: number) {
//     super(age);
//   }
//   getParentName() {
//     // console.log(super.age);
//     console.log(super.getAge());
//   }
// }
// const c = new Child(20);
// // console.log(c.age)

// class UserInfo {
//   readonly name: string;
//   constructor(name: string) {
//     this.name = name;
//   }
// }
// const userInfo = new UserInfo("jack");
// console.log(userInfo.name);
// // userInfo.name = "hhh";

// class Parent {
//   public static getAge() {
//     return this.age;
//   }
//   public static age: number = 18;
// }
// const p = new Parent();
// // p.age
// // p.getAge()
// console.log(Parent.age);
// console.log(Parent.getAge());

// class Info {
//   public name: string;
//   public age?: number;
//   constructor(name: string, age?: number) {
//     this.name = name;
//     this.age = age;
//   }
// }
// const i1 = new Info("jack");
// console.log(i1);
// const i2 = new Info("jack", 26);
// console.log(i2);

// abstract class People {
//   constructor(public name: string) {}
//   public abstract printName(): void;
// }
// class Man extends People {
//   constructor(name: string) {
//     super(name);
//     this.name = name;
//   }
//   public printName(): void {
//     console.log(this.name);
//   }
// }
// const m = new Man("adam");
// m.printName();

// abstract class Human{
//     public abstract name:string;
//     abstract get insideName():string;
//     abstract set insideName(value:string);
// }
// class Student extends Human{
//     public name:string=''
//     public insideName:string=''
// }

interface FoodInterface {
  type: string;
}
class FoodClass implements FoodInterface {
  public type: string;
  constructor(type: string) {
    this.type = type;
  }
}

const create = <T>(c: new () => T): T => {
  return new c();
};
class Info {
  public age: number;
  constructor() {
    this.age = 18;
  }
}
console.log(create(Info).age);
