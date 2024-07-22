interface NameInfo {
  firstName: string;
  lastName: string;
}
const getFullName = ({ firstName, lastName }: NameInfo): string => {
  return `${firstName} ${lastName}`;
};
getFullName({
  firstName: "first",
  lastName: "last",
});

interface vegetables {
  colour: string;
  type: string;
}
const getVegetables = ({ colour, type }: vegetables) => {
  return `一个${colour ? colour + "" : ""}的${type}`;
};
console.log(
  getVegetables({
    colour: "红色",
    type: "胡萝卜",
  })
);

interface ArrInter {
  0: number;
  readonly 1: string;
}
let arr: ArrInter = [1, "a"];
// arr[1]='s'

type AddFunc = (num1: number, num2: number) => number;

const add: AddFunc = (num1, num2) => num1 + num2;
console.log(add(1, 9));

interface fruit {
  colour: string;
}
interface watermelon extends fruit {
  price: number;
}
interface carrot extends fruit {
  length: number;
}

let w: watermelon = {
  colour: "green",
  price: 20,
};
let c: carrot = {
  colour: "orange",
  length: 10,
};

interface Counter {
  (): void;
  count: number;
}

const getCounter = (): Counter => {
  const c = () => {
    c.count++;
  };
  c.count = 0;
  return c;
};
const ct: Counter = getCounter();
ct();
console.log(ct.count);
ct();
console.log(ct.count);
ct();
console.log(ct.count);
