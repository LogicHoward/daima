// interface ObjectA {
//   a: string;
// }
// interface ObjectB {
//   b: string;
// }
// let Aa: ObjectA = {
//   a: "a",
// };
// let Bb: ObjectB = {
//   b: "b",
// };
// let AB = Object.assign(Aa, Bb);
// console.log(AB);

class ClassAa {
  public isA: boolean = false;
  public funcA() {}
}
class ClassBb {
  public isB: boolean = false;
  public funcB() {}
}
class ClassAB implements ClassAa, ClassBb {
  public isA: boolean = false;
  public isB: boolean = false;
  public funcA: () => void = () => {};
  public funcB: () => void = () => {};
  constructor() {}
}
function mixins(base: any, from: any[]) {
  from.forEach((fromItem) => {
    Object.getOwnPropertyNames(fromItem.prototype).forEach((key) => {
      console.log(key);
      base.prototype[key] = fromItem.prototype[key];
    });
  });
}
mixins(ClassAB, [ClassAa, ClassBb]);
const ab = new ClassAB();
console.log(ab);
