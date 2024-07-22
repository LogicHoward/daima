// let add: (x: number, y: number) => number;
// add = (arg1: number, arg2: number): number => arg1 + arg2;
// add = (arg1: number, arg2: number) => arg1 + arg2;

// type Add = (x: number, y: number) => number;
// let addFunc: Add;

// type Add2 = (x: number, y: number, z?: number) => number;
// let addFunc2: Add2;
// addFunc2 = (arg1: number, arg2: number) => arg1 + arg2;
// addFunc2 = (arg1: number, arg2: number, arg3?: number) =>
//   arg1 + arg2 + (arg3 ?? 0);

// const handleData = (arg1: number[], ...arg2: number[]) => {
//   arg1.push(...arg2);
// };

// let arr5: number[] = [1, 2, 3];
// handleData(arr5, 1, 2, 3);
// console.log(arr5);

function handleData(x: string): string[];
function handleData(x: number): number[];
function handleData(x: any): any {
  if (typeof x === "string") {
    return x.split("");
  } else {
    return x
      .toString()
      .split("")
      .map((item: string) => Number(item));
  }
}
console.log(handleData(56789));
console.log(handleData("hello"));
