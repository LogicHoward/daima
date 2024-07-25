// function setName() {
//   console.log("get setName ");
//   return (target: any) => {
//     console.log("setName");
//   };
// }
// function setAge() {
//   console.log("get setAge");
//   return (target: any) => {
//     console.log("setAge");
//   };
// }
// @setName()
// @setAge()
// class ClassA {}

// function classDecorator<T extends new (...args: any[]) => {}>(target: T) {
//   return class extends target {
//     public newProperty = "new property";
//     public hello = "override";
//   };
// }
// @classDecorator
// class Greeter {
//   public property = "property";
//   public hello: string;
//   constructor(m: string) {
//     this.hello = m;
//   }
// }
// console.log(new Greeter("world"));

interface ObjWithAnyKeys {
  [key: string]: any;
}

let obj3: ObjWithAnyKeys = {};
Object.defineProperty(obj3, "name", {
  value: "lison",
  writable: false,
  configurable: false,
  enumerable: true,
});

// Object.defineProperty(obj3, "name", {
//   writable: true,
// });
// console.log(obj3);
// console.log(obj3.name);
// obj3.name = "andy";
// console.log(obj3.name);
// for (const key in obj3) {
//   console.log(key);
// }

// function enumrable(bool: boolean) {
//   return (
//     target: any,
//     propertyName: string,
//     descriptor: PropertyDescriptor
//   ) => {
//     console.log(target);
//     descriptor.enumerable = bool;
//   };
// }
// class ClassF {
//   constructor(public age: number) {}
//   @enumrable(false)
//   public getAge() {
//     return this.age;
//   }
// }
// const c = new ClassF(18);
// for (const key in c) {
//   console.log(key);
// }

// function enumerable(bool: boolean) {
//   return (
//     target: any,
//     propertyName: string,
//     descriptor: PropertyDescriptor
//   ) => {
//     descriptor.enumerable = bool;
//   };
// }

// class ClassG {
//   private _name: string;
//   constructor(name: string) {
//     this._name = name;
//   }
//   @enumerable(false)
//   get name() {
//     return this._name;
//   }
//   set name(name) {
//     this._name = name;
//   }
// }
// const c = new ClassG("mike");
// for (const key in ClassG) {
//   console.log(key);
// }

// function printPropertyName(target: any, propertyName: string) {
//   console.log(propertyName);
// }
// class ClassH {
//   @printPropertyName
//   public name: string = "jj";
// }

function required(target: any, propertyName: string, index: number) {
  console.log(`修饰的是${propertyName}的第${index + 1}个参数`);
}
class ClassI {
  public name: string = "lison";
  public age: number = 78;
  public getInfo(prefix: string, @required infoType: string): any {
    return prefix + " " + this[infoType];
  }
}
interface ClassI {
  [key: string]: string | number | Function;
}
const I = new ClassI();
I.getInfo("hello", "age");
