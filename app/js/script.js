// let array = ["html", "css", "javascript"];
// console.log(array[0]);

// for (let i = 0; i < array.length; i++) {
//   console.log(array[i]);
// } //пробежись по элементам массива от 0 с шагом 1 до конца длины

// let matrix = [
//   [1, 2, 3, 0],
//   [4, 5, 6],
//   [7, 8, 9],
// ];
// // console.log(matrix[2][2] + matrix[2][1] );

// let sum = 0;

// for (let i = 0; i < matrix.length; i++) {
//   for (let j = 0; j < matrix[i].length; j++) {
//     console.log(matrix[i][j]);
//     sum += matrix[i][j];
//   }
// }

// console.log(sum);

// let users = [];

// for (let i = 0; i < 3; i++) {
//   let str = prompt("Input your name", "");
//   if (str == null) {
//     console.log("cancel was pressed");
//     break;
//   } else {
//     users.push(str);
//   }
//   alert("Your name" + str + "!");
// }

// console.log(users);

//Practika 2
// let str = "Lorem ipsuma is simplyyy dummy loreman";
// let arr = str.split(" ");
// let countWords = 0;
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i].length > 6) {
//     console.log(arr[i]);
//   }
// }

//Praktika sortirovka po simvolam

// let str = "Lorem ipsuma is simplyyy dummy loreman";
// let arr = str.split(" ");
// let arr = [1, 2, 10];
// arr.sort();
// console.log(arr);

//Sravnenie

// function compareNumeric(a, b) {
//   if (a > b) return 1;
//   if (a == b) return 0;
//   if (a < b) return -1;
// }
// let arr = [1, 2, 10];
// arr.sort(compareNumeric);
// console.log(arr);

//reverse
// arr.reverse(compareNumeric);
// console.log(arr);

//soedinenie

// let newArr = [1, 2];
// let newArrQ = arr.concat(3, 4);

// console.log(newArrQ);

//Practica tr18

// function randomNumber(min, max) {
//   let rand = min + Math.random() * (max - min);
//   return Math.round(rand);
// }

// alert(randomNumber(1, 100));

// let arr = [1, 2, 3, 4];
// let arg = promt("input your number", "0");
// let res;

// if (arg != null) {
//   let res = arr.indexOf(+arg);
// } else {
//   console.log("Cancel was pressed");
// }

// if (res == -1) {
//   console.log("Num not found");
// } else {
//   console.log(res);
// }

/////
let arr = [1, 2, 3, 4];
let arg = prompt("input your number", "0");

if (arg != null) {
  searchElem(arg);
} else {
  console.log("Cancel was pressed");
}

function searchElem(arg) {
  let res = arr.indexOf(+arg);
  if (res == -1) {
    console.log("Num not found");
  } else {
    console.log(res);
  }
}
