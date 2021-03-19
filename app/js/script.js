function Evaluate(a, b) {
    let c; b=1;
  if (a > 0 && !(a < 10)) {
    c = a + b * 3;
  } else {
    //a==0
    c = a * 2 + b * 4;
  }
  return c;
}

let a = 0;
let b = 2;
let c = 0;



if (a != null) {
  console.log("ok was pressed");
  a = parseInt(prompt("Imput your digit", "0"));
  c = Evaluate(a, 1);
} else {
  console.log("cancel was pressed");
}

let d = (a>0) ? a+b: a*b;
alert(c);

// c++;
// console.log(c);

// let a = 2 + 2;
// switch (a) {
//   case 3:
//     alert("Трохи помилилися, буває.");
//   case 4:
//     alert("Вірно!");
//     break;
//   case 5: // (**)
//     alert("Невірно!");
//     break;
//   default:
//     alert("Дивний результат, дуже дивний");
// }

// console.log(c);

// for (let i = 9; i > 1; i--) {
//   console.log(i ** 2);
// }

// for (let i = 9; i > 1; i--) {
//   if (i === 3) {
//     break;
//   }
//   console.log(i);
// }
