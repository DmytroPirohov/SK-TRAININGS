// let i = 1;

// function getPriceProduct(name, price, sale = 0.1, id = 9) {
//   return price - price * sale;
// }

// console.log(getPriceProduct("product", 100, 0.2));

//Функция CallBack

// let i = 1;

// function askMe(question, yes, no) {
//   if (confirm(question)) {
//     yes();
//   } else {
//     no();
//   }
// }

// function showOk() {
//   console.log("yes");
// }
// function showNo() {
//   console.log("no");
// }

// askMe("Agree?", showOk, showNo);

//Обновления Function Expression
// askMe("Agree?", showOk, showNo);

// let askMeNextGeneration = function (question, yes, no) {
//   if (confirm(question)) {
//     yes();
//   } else {
//     no();
//   }
// };

// askMeNextGeneration("Agree?", showOk, showNo);

// function showOk() {
//   console.log("yes");
// }
// function showNo() {
//   console.log("no");
// }

// function askMe(question, yes, no) {
//   if (confirm(question)) {
//     yes();
//   } else {
//     no();
//   }
// }

// askMe("Agree?", showOk, showNo);
// askMeNextGeneration("Agree?", showOk, showNo);
//f++; //увеличить 1 на 1 = 2

//Функции стрелки

// let sum = function (a, b) {
//   return a + b;
// };

// let sum = (a, b) => a + b;

// console.log(sum(1, 2));

// let isNumber = function (num1, num2) {
//   let res;
//   if (num1 > num2) {
//     res = num1;
//   } else if (num1 < num2) {
//     res = num2;
//   } else {
//     res = num1;
//   }
//   return res;
// };

// return a > b ? a : b; //как вариант

// console.log(isNumber(1, 2));

//let random = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

// alert(random(1, 100));

//console.log(random(1, 1000));

// function random(min, max) {
//   let i = Math.round(min + Math.random() * (max - min));
//   return i % 2 != 0 ? i : random(min, max);
// }

// console.log(random(1, 100));

let random = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

let rnd = random(1, 1000);
if (rnd % 2) {
  alert("четное" + "" + rnd);
} else {
  alert("нечетное" + "" + rnd);
}
