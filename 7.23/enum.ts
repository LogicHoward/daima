// enum Status {
//   UpLoading,
//   Success,
//   Failed,
// }
// console.log(Status.UpLoading);

enum Message {
  aa = "aa",
  bb = "bb",
  cc = aa,
}
console.log(Message);

enum Result {
  Failed = 0,
  Succes = "success",
}

enum Animals {
  Dog = 1,
  Cat = 2,
}
interface Dog {
  type: Animals.Dog;
}
const dog: Dog = {
  type: Animals.Dog,
};

enum Status {
  Off,
  On,
}
interface Light {
  status: Status;
}
const light: Light = {
  status: Status.Off,
};
