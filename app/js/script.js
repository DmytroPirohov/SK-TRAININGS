//1.Если переменная больше нуля и меньше 5-ти,
//то выведите "Верно", в противном случае выведите "Неверно".

// const { src } = require("gulp");

// var num = 10;
// if (num > 0 && num < 5) {
//   alert("Верно");
// } else {
//   alert("Неверно");
// }

//или с тернарным оператором

// let filter = function (a) {
//   return a > 0 && a < 5 ? true : false;
// };

// let a = 9;
// console.log(filter(a));

// 2. Переменная num может принимать 4 значения: 1, 2, 3 или 4.
//Если она имеет значение '1', то в переменную result запишем "зима",
//если имеет значение "2" - "весна" и так далее.
//Решите задачу через switch-case.
// function print(str) {
//   console.log(str);
//   alert(str);
// }
// function getValidatedArg(num) {
//   if (typeof num != "number") {
//     num = parseInt(num);
//     print("Параметр имеет неправильный тип " + typeof num);
//   }
//   return num;
// }
// function getSelectedValue(num) {
//   let result;
//   num = getValidatedArg(num);
//   switch (num) {
//     case 1:
//       result = "зима";
//       break;
//     case 2:
//       result = "весна";
//       break;
//     case 3:
//       result = "лето";
//       break;
//     case 4:
//       result = "осень";
//       break;
//     default:
//       result = "Я не знаю такого значения " + num;
//   }
//   return result;
// }

// let num = prompt("Введите число от 1 до 4");

// print(getSelectedValue(num));

//3. Данная строка 'aaa bbb ccc ". Вырез с нее слово "bbb" тремя различными способами (через substr, substring, slice).

let str = "aaa bbb ccc";
let arg = "bbb";

function customSubStr(src, substr) {
  src = substr;
  return src;
}

console.log(str.substr(4, 3)); //substr(с какого символа отрезать, сколько отрезать)
console.log(str.substring(4, 7)); //substring(с какого символа отрезать, до какого символа отрезать)
console.log(str.slice(4, 7)); //slice(с какого символа отрезать, докуда отрезать)
