// function getIndexPromise(bool: boolean) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log(1);
//       if (bool) {
//         resolve("a");
//       } else {
//         reject(Error("error"));
//       }
//     }, 1000);
//   });
// }
// getIndexPromise(false)
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((error) => {
//     console.log(error);
//   });
// async function asyncFunction() {
//   const res = await getIndexPromise(true);
//   console.log(res);
// }
// asyncFunction();

interface Object {
  name?: string;
  age?: number;
}
let objIn = {
  sex: "man",
};
function printInfo(info: Object) {
  console.log(info);
}
printInfo(objIn as Object);

function mergeOptions<T, U extends string>(op1: T, op2: U) {
  return { ...op1, op2 };
}

function getExcludeProp<T extends { props: string }>(obj: T) {
  const { props, ...rest } = obj;
  return rest;
}
const objInfo = {
  props: "something",
  name: "lison",
  age: 18,
};
console.log(getExcludeProp(objInfo));
