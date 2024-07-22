// const s = Symbol();
// const s1 = Symbol("jason");
// console.log(s1);
// console.log(s1.toString());
// // const s2=Symbol({a:'a'})
// console.log(Boolean(s1));
const s3 = Symbol("s3");
const info = {
  name: "jane",
  [s3]: "vip",
  sex: "男",
};
// console.log(info);
// info[s3] = "svip";
// console.log(info);

// console.log(Object.keys(info));
// console.log(Object.getOwnPropertyNames(info));
// console.log(JSON.stringify(info));
// console.log(Object.getOwnPropertySymbols(info));
// console.log(Reflect.ownKeys(info));

//instanceof
const s4 = Symbol.for("ff");
const s5 = Symbol.for("ff");
console.log(Symbol.keyFor(s4));

// const obj = {
//   [Symbol.hasInstance](otherObj) {
//     console.log(otherObj);
//   },
// };
// console.log({ a: "a" } instanceof <any>obj);

// let arr = [1, 2];
// console.log([].concat(arr,[3, 4] ));
// console.log(arr[Symbol.isConcatSpreadable as any]);

// class C extends Array {
//   constructor(...args: number[]) {
//     super(...args);
//   }
//   static get [Symbol.species]() {
//     return Array;
//   }
//   getName() {
//     return "ls";
//   }
// }
// const c = new C(1, 2, 3);
// const b = c.map((item) => item + 1);
// console.log(b);
// console.log(b instanceof C);
// console.log(b instanceof Array);

// let obj3 = {
//   [Symbol.match](str: string) {
//     console.log(str.length);
//   },
// };
// "abcde".match(<RegExp>obj3);

let obj4 = {
  [Symbol.toStringTag]: "jack",
};
console.log(obj4.toString());
