// interface infoInterface {
//   name: string;
//   getRes(input: string): number;
// }
// interface infoInterface {
//   age: number;
//   getRes(input: number): string;
// }

// const info: infoInterface = {
//   name: "hhh",
//   age: 56,
//   getRes(input: any): any {
//     if (typeof input === "string") {
//       return input.length;
//     } else {
//       return String(input);
//     }
//   },
// };

// console.log(info.getRes(33));

// namespace Validations {
//   export function A() {}
// }
// namespace Validations {
//   export function B() {}
// }
// console.dir(Validations);

// class Validations{
//     constructor(){}
//     public checkType(){}
// }
// namespace Validations{
// export const nn=123
// }
// console.dir(Validations)

function CountUp() {
  CountUp.count++;
}
namespace CountUp {
  export let count = 0;
}
// console.log(CountUp.count);
// CountUp();
// console.log(CountUp.count);
// CountUp();
// console.log(CountUp.count);
// CountUp();

enum Colours {
  red,
  greeen,
  blue,
}
namespace Colours {
  export const yellow = 3;
}
console.log(Colours);
