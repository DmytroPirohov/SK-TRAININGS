// let inc = function (x) {
//   return a % b;
// };
// let b = 2;
// let s = (a, b) => a % b;
// console.log(s(5, b));

// let b = 2;
// let inc = (a, b) => {
//   let result = a % b;
//   return result;
// };

// alert(inc(1, b));

// let arr = ["Ivan", "Box", "junior", "23"];
// let [firstName, lastName, ...info] = arr;
// let obj = { name: "Ivan", lastName: "Fox" };
// let { name, lastName } = obj;

// console.log(firstName);
// console.log(lastName);
// console.log(info);

// let log = function (a, b, c) {
//   console.log(a, b, c);
// };
// log(...arr);

// let log2 = function (a, b, ...rest) {
//   console.log(a, b, rest);
//   rest[1000] = 1;
//   console.log(rest);
// };

// log2("Ivan", "Box", "junior", "23");
// let map = new Map();
// map.set("1", "First string");
// map.set(2, "Second string");
// map.set(true, "Third string");
// console.log(map.get("1"));
// console.log(map.get(2));
// console.log(map.get(true));
// console.log(map.size);

// let arr = ["Ivan", "Box", "junior", "23"];
// let [firstName, lastName, ...info] = arr;
// let str = `name: ${firstName}, lastname: ${lastName}`;
// console.log(str);

let recipeMap = new Map([
  ["Огурец", 500],
  ["Помидор", 350],
  ["Лук", 50],
]);
for (let item of recipeMap.entries()) {
  console.log(item);
}
