// let now = new Date();
// let s = "hello";

// console.log(s);

// console.log(now.getFullYear());
// now.setFullYear(2020);
// console.log(now.getFullYear());
// let delim = "and";

// let str = "Hello";

// console.log(str[2]); //в консоль выводит букву e в слове  Hello
// console.log(str.charCodeAt(0));

// let str2 = "second";

// let str3 = str + " " + delim + " " + str2;
// console.log(str3);

// let str4 = `${str} jkhjhkhj ${delim} ${str2}`;
// console.log(str4);

var str = "please locate where locate occurs!";
str2 = str[0].toUpperCase();
let flag = false;

// console.log(str[0].toUpperCase());
let result = str[0].toUpperCase() + str.substring(1);

// console.log(result);

for (let i = 0; i < result.length; i++) {
  if (str[i] == " ") {
    // console.log ("Ура пробел");
    console.log(" ");
    flag = true;
  } else {
    if (flag == true) {
      console.log(result[i].toUpperCase());
      flag = false;
    } else {
      console.log(result[i]);
    }
  }
}

console.log(result);
