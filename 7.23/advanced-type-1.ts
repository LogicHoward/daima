// const mergeFunc = <T, U>(arg1: T, arg2: U): T & U => {
//   let res = {} as T & U;
//   Object.assign(res as {}, arg1, arg2);
//   return res;
// };
// mergeFunc({ a: "a" }, { b: "b" });

// const getLengthFunc = (content: string | number): number => {
//   if (typeof content === "string") {
//     return content.length;
//   } else {
//     return content.toString().length;
//   }
// };
// console.log(getLengthFunc(456));

function isString(value: string | number): value is string {
  return typeof value === "string";
}
// const judgeType = (value: string | number) => {
//   if (isString(value)) {
//     console.log("string");
//   } else {
//     console.log("num");
//   }
// };
// const judgeType = (value: string | number) => {
//   if (typeof value === "string") {
//     console.log("string");
//   } else {
//     console.log("num");
//   }
// };
// judgeType(333);
// judgeType("sasa");

// type Direction = "north" | "east" | "south" | "west";
// function getDirection(direction: Direction) {
//   return "direction:" + direction;
// }
// getDirection("east");

interface Square {
  kind: "square";
  size: number;
}
interface Rectangle {
  kind: "rectangle";
  height: number;
  width: number;
}
interface Circle {
  kind: "circle";
  radius: number;
}
type Shape = Square | Rectangle | Circle;

function assertNever(value: never): never {
  throw new Error("Unexpected object:" + value);
}
function getArea(shape: Shape) {
  switch (shape.kind) {
    case "square":
      return shape.size * shape.size;
      break;
    case "rectangle":
      return shape.height * shape.width;
      break;
    case "circle":
      return shape.radius * shape.radius * Math.PI;
      break;
    default:
      return assertNever(shape);
  }
}
