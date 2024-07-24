const name = "jack";
const age = 29;
export { name, age };

function func1() {
  console.log("f1");
}
class B {}
const c = "";
export { func1 as Function1, B as ClassB, c as StringC, func2, x, y };
function func() {
  console.log("def");
}
export default func;

function func2() {
  console.log("func2");
}
const x = 0;
const y = 1;
