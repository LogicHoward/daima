function setName() {
  console.log("get setName ");
  return (target: any) => {
    console.log("setName");
  };
}
function setAge() {
  console.log("get setAge");
  return (target: any) => {
    console.log("setAge");
  };
}
@setName()
@setAge()
class ClassA {}

function classDecorator<T extends new (...args: any[]) => {}>(target: T) {
  return class extends target {
    public newProperty = "new property";
    public hello = "override";
  };
}
@classDecorator
class Greeter {
  public property = "property";
  public hello: string;
  constructor(m: string) {
    this.hello = m;
  }
}
console.log(new Greeter("world"));
