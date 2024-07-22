//布尔类型
let bool: boolean = true;
//数字类型
let num: number = 123;
//字符串类型
let str: string = "hhh";

str = `打印数字${num}`;
console.log(str);
//数组类型
let arr1: number[];
arr1 = [4, 5, 6, 7];
console.log(arr1);

let arr2: Array<number>;
arr2 = [8, 9, 10];
console.log(arr2);

let arr3: (string | number)[];
arr3 = [1, 23, "sbab", 556];
console.log(arr3);
//元组类型
let yz: [string, number, boolean];
yz = ["hhh", 35, false];
console.log(yz);
//枚举类型
enum Roles {
  SUPER_ADMIN,
  ADMIN,
  USER,
}
console.log(Roles);
//any类型
// let a: any;
// a = 1;
// a = "ab";
// a = true;
const arr4: any[] = [1, "a"];
//void 类型
let v: void;
v = undefined;
//undefined类型
let u: undefined;
// u=12
u = undefined;
//null类型
let n: null;
// n='abc'
n = null;
//never类型
let nv: never;

const errorFunc = (message: string): never => {
  throw new Error(message);
};
//object类型
let obj1 = {
  name: "jack",
};
let obj2 = obj1;
obj2.name = "james";
console.log(obj1.name);

//类型断言

const outputLength = (target: number | string): void => {
  if ((<string>target).length || (target as string).length === 0) {
    console.log((target as string).length);
  } else {
    console.log(target.toString().length);
  }
};
outputLength("gfhdh");
outputLength(123456789);
