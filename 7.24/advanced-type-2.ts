// // class Counter {
// //     public count: number;
// //     constructor(count: number) {
// //       this.count = count;
// //     }
// //     public add = (value: number) => {
// //       this.count += value;
// //       return this;
// //     };
// //     public substract = (value: number) => {
// //       this.count -= value;
// //       return this;
// //     };
// //   }
// //   const c = new Counter(4);
// //   c.add(2).substract(5);
// //   console.log(c.count);

// //   interface Info {
// //     name: string,
// //     age: number
// //   }
// //   let infoProp: keyof Info;
// //   infoProp = 'name';
// //   infoProp = 'age';

// //   function getValue<T, K extends keyof T>(obj: T, names: K[]) {
// //     return names.map((n) => obj[n]);
// //   }
// //   const infoObj = {
// //     name: "jack",
// //     age: 18,
// //   };
// //   let values = getValue(infoObj, ["name", "age"]);
// //   console.log(values);

// //   interface Type {
// //     a: never;
// //     b: string;
// //     c: number;
// //     d: undefined;
// //     e: object;
// //     f: null;
// //   }
// //   type Test = Type[keyof Type];

// //   interface Info1 {
// //     age: number;
// //     name: string;
// //     sex: string;
// //   }
// //   type ReadonlyType<T> = {
// //     readonly [P in keyof T]: T[P];
// //   };
// //   type ReadonlyInfo = Readonly<Info1>;

// //   let info11: ReadonlyInfo = {
// //     age: 18,
// //     name: " jack",
// //     sex: "man",
// //   };

// //   interface Info2 {
// //     name: string;
// //     age: number;
// //     address: string;
// //   }
// //   const info2: Info2 = {
// //     name: "jack",
// //     age: 18,
// //     address: "beijing",
// //   };

// //   function pick<T, K extends keyof T>(obj: T, keys: K[]) {
// //     let res: any = {};
// //     keys.map((key) => {
// //       res[key] = obj[key];
// //     });
// //     return res;
// //   }
// //   const pickTest = pick(info2, ["address", "age"]);
// //   console.log(pickTest);

// //   function mapObject<K extends string | number, T, U>(
// //     obj: Record<K, T>,
// //     f: (x: T) => U
// //   ): Record<K, U> {
// //     let res: any = {};
// //     for (const key in obj) {
// //       res[key] = f(obj[key]);
// //     }
// //     return res;
// //   }

// //   type Proxy<T> = {
// //     get(): T;
// //     set(value: T): void;
// //   };
// //   type Proxify<T> = {
// //     [P in keyof T]: Proxy<T[P]>;
// //   };
// //   function proxify<T>(obj: T): Proxify<T> {
// //     const result = {} as Proxify<T>;
// //     for (const key in obj) {
// //       result[key] = {
// //         get: () => obj[key],
// //         set: (value) => (obj[key] = value),
// //       };
// //     }
// //     return result;
// //   }

// //   let props = {
// //     name: "jack",
// //     age: 18,
// //   };
// //   let proxyProps = proxify(props);
// //   proxyProps.age.set(15);
// //   console.log(props);

// //   function unproxify<T>(t: Proxify<T>): T {
// //     let result = {} as T;
// //     for (const k in t) {
// //       result[k] = t[k].get();
// //     }
// //     return result;
// //   }
// //   let originalProps = unproxify(proxyProps);
// //   console.log(originalProps);

// //   let value1: unknown;
// //   value1 = 123;
// //   value1 = "ff";

// //   let value2: unknown;
// //   let value3: string = value2;

// //   let value4: unknown;
// //   value4 += 1;

// //   let value: string & unknown;
// //   let value6: number & unknown;

// //   type Typea<T> = T extends string ? string : number;
// //   let index: Typea<boolean>;

// //   type Type2<T> = T extends any[] ? T[number] : T;
// //   type Type3 = Type2<string[]>;
// //   type Type4 = Type2<boolean>;

// //   type Type5<T> = T extends Array<infer U> ? U : T;
// //   type Type6 = Type5<number[]>;
// //   type Type7 = Type5<string>;

// class Counter {
//     public count: number;
//     constructor(count: number) {
//       this.count = count;
//     }
//     public add = (value: number) => {
//       this.count += value;
//       return this;
//     };
//     public substract = (value: number) => {
//       this.count -= value;
//       return this;
//     };
//   }
//   const c = new Counter(4);
//   c.add(2).substract(5);
//   console.log(c.count);

//   interface Info {
//     name: string,
//     age: number
//   }
//   let infoProp: keyof Info;
//   infoProp = 'name';
//   infoProp = 'age';

//   function getValue<T, K extends keyof T>(obj: T, names: K[]) {
//     return names.map((n) => obj[n]);
//   }
//   const infoObj = {
//     name: "jack",
//     age: 18,
//   };
//   let values = getValue(infoObj, ["name", "age"]);
//   console.log(values);

//   interface Type {
//     a: never;
//     b: string;
//     c: number;
//     d: undefined;
//     e: object;
//     f: null;
//   }
//   type Test = Type[keyof Type];

//   interface Info1 {
//     age: number;
//     name: string;
//     sex: string;
//   }
//   type ReadonlyType<T> = {
//     readonly [P in keyof T]: T[P];
//   };
//   type ReadonlyInfo = Readonly<Info1>;

//   let info11: ReadonlyInfo = {
//     age: 18,
//     name: " jack",
//     sex: "man",
//   };

//   interface Info2 {
//     name: string;
//     age: number;
//     address: string;
//   }
//   const info2: Info2 = {
//     name: "jack",
//     age: 18,
//     address: "beijing",
//   };

//   function pick<T, K extends keyof T>(obj: T, keys: K[]) {
//     let res: any = {};
//     keys.map((key) => {
//       res[key] = obj[key];
//     });
//     return res;
//   }
//   const pickTest = pick(info2, ["address", "age"]);
//   console.log(pickTest);

//   function mapObject<K extends string | number, T, U>(
//     obj: Record<K, T>,
//     f: (x: T) => U
//   ): Record<K, U> {
//     let res: any = {};
//     for (const key in obj) {
//       res[key] = f(obj[key]);
//     }
//     return res;
//   }

//   type Proxy<T> = {
//     get(): T;
//     set(value: T): void;
//   };
//   type Proxify<T> = {
//     [P in keyof T]: Proxy<T[P]>;
//   };
//   function proxify<T>(obj: T): Proxify<T> {
//     const result = {} as Proxify<T>;
//     for (const key in obj) {
//       result[key] = {
//         get: () => obj[key],
//         set: (value) => (obj[key] = value),
//       };
//     }
//     return result;
//   }

//   let props = {
//     name: "jack",
//     age: 18,
//   };
//   let proxyProps = proxify(props);
//   proxyProps.age.set(15);
//   console.log(props);

//   function unproxify<T>(t: Proxify<T>): T {
//     let result = {} as T;
//     for (const k in t) {
//       result[k] = t[k].get();
//     }
//     return result;
//   }
//   let originalProps = unproxify(proxyProps);
//   console.log(originalProps);

//   let value1: unknown;
//   value1 = 123;
//   value1 = "ff";

//   let value2: unknown;
//   let value3: string = value2;

//   let value4: unknown;
//   value4 += 1;

//   let value: string & unknown;
//   let value6: number & unknown;

//   type Typea<T> = T extends string ? string : number;
//   let index: Typea<boolean>;

//   type Type2<T> = T extends any[] ? T[number] : T;
//   type Type3 = Type2<string[]>;
//   type Type4 = Type2<boolean>;

//   type Type5<T> = T extends Array<infer U> ? U : T;
//   type Type6 = Type5<number[]>;
//   type Type7 = Type5<string>;

type Type8 = Exclude<string | number, number>;

type Type9 = Extract<string | number, number>;

type Type10 = NonNullable<string | number | null | undefined>;
type Type11 = ReturnType<() => string>;
type Type12 = ReturnType<() => number>;

class A {}
type T1 = InstanceType<typeof A>;
type T2 = InstanceType<any>;
type T3 = InstanceType<never>;
type T4 = InstanceType<string>;
