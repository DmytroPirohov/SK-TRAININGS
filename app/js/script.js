class User {
  constructor(name) {
    this.name = name; // вызывают сеттер
  }
  get name() {
    return this._name.length;
  }
  set name(value) {
    if (value.length < 4) {
      alert("имя короткое");
      return;
    }
    this._name = value;
  }
}

let user = new User("John");
alert(user.name); // John

user = new User(""); // имя короткое

/*class User {
  constructor(name) {
    this.name = name;
  }
  sayHi() {
    console.log("Hi from " + this.name);
  }
}

let user = new User("Alex");
user.sayHi();

class Admin extends User {
  sayHi() {
    super.sayHi();
    console.log("Try from " + this.name);
  }
}
let admin = new Admin("Dmytro");

console.log(admin.sayHi());*/

/*function Animal(name) {
  this.name = name;
  this.speed = 0;
}

function Rabbit(name) {
  this.name = name;
  this.speed = 0;
  this.eats = true;
}

Rabbit.prototype = Object.create(Animal.prototype);
Rabbit.prototype.constructor = Rabbit;

let obj = new Rabbit("T-Rex");

for (let item in obj) {
  console.log(item + "=" + obj.hasOwnProperty(item));
}

String.prototype.repeat = function (times) {
  return new Array(times + 1).join(this);
};

console.log("DMYTRO ".repeat(10));*/
