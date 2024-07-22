// const getArray = <T>(value: T, times: number = 5): T[] => {
//   return new Array(times).fill(value);
// };
// console.log(getArray<number>(5, 5).map((item) => item.toFixed()));

// const getArray = <T, U>(p1: T, p2: U, times: number): Array<[T, U]> => {
//   return new Array(times).fill([p1, p2]);
// };
// getArray(1, "a", 3).forEach((item) => {
//   console.log(item[0]);
//   console.log(item[1]);
// }

// type GetArray=<T>(arg:T,times:number)=>T[]
// let getArray:GetArray=(arg:any,times:number)=>{
// return new Array(times).fill(arg)
// }

// interface valueWithLength {
//   length: number;
// }
// const getArray = <T extends valueWithLength>(value: T, times: number): T[] => {
//   return new Array(times).fill(value);
// };
// console.log(getArray([1, 5], 3));
// console.log(getArray("26", 3));

const getProps = <T, K extends keyof T>(object: T, propName: K) => {
  return object[propName];
};
