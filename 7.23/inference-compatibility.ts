// let name='fhfh'
// name=123

// window.onmousedown=(event)=>{
//     console.log(event)
// }

// let x = (a: number, b: number) => 0;
// let y = (a: number) => 0;
// x = y;
// // y=x

// const getSum = (
//   arr: number[],
//   callback: (...args: number[]) => number
// ): number => {
//   return callback(...arr);
// };
// const res = getSum([1, 2, 3, 4, 5, 6], (...args: number[]): number =>
//   args.reduce((a, b) => a + b)
// );

// console.log(res);

// let funcA=(arg:number|string):void=>{}
// let funcB=(arg:number):void=>{}
// // funcA=funcB
// funcB=funcA

function merge(arg1: number, arg2: number): number;
function merge(arg1: string, arg2: string): string;
function merge(arg1: any, arg2: any) {
  return arg1 + arg2;
}
console.log(merge(1, 2));
console.log(merge("1", "2"));
