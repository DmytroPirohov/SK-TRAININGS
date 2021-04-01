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

let users = [];

for (let i = 0; i < 3; i++) {
  let str = prompt("Input your name", "");
  if (str == null) {
    console.log("cancel was pressed");
    break;
  } else {
    users.push(str);
  }
  alert("Your name" + str + "!");
}

console.log(users);
