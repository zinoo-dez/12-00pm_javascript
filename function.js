/** 
function sayHello() {
  console.log("good morning ");
}
sayHello();

function sayHello(name) {
  console.log("good morning " + name);
}
sayHello("rose");

function sayHello(name = "koko") {
  console.log("good morning " + name);
}
sayHello("rose");
// console.log(sayHello());
*/

// function sayHi(time, name) {
//   return `${time} ${name}`;
// }
// console.log(sayHi("good morining", "bobo"));
// function good_morining() {}
// function goodMorining() {}

//function expression
// const name = function (name) {
//   return "say hello";
//   console.log(this);
// };
// console.log(name("rose"));

// const multi = function (a, b) {
//   return a * b;
// };
// console.log(multi(22, 22));
/*
function one() {
  return {
     // console.log(); error
     // var,let,const error
    name: "bobo",
    sayname() {
      console.log("helllo");
    },
  };
}
one().sayname();
*/

// const sayName = () => "my name is name1";
// const sayName2 = (_) => "my name is name2";
// const sayName3 = (name) => "my name is  " + name;
// const add = (a, b) => a + b;

// console.log(sayName());
// console.log(sayName2());
// console.log(sayName3("rose"));
// console.log(add(10, 20));
/*
function Person(fname, lname, dob) {
  console.log(this);
  this.fname = fname;
  this.lname = lname;
  this.dob = new Date(dob);
  this.getFullYear = function () {
    return this.dob.getFullYear();
  };
}
Person.prototype.getFullName = function () {
  return `${this.fname} ${this.lname}`;
};
const p1 = new Person("Mr", "john", "1-1-1990");
const p2 = new Person("Mr", "willim", "1-1-1998");
console.log(p1.lname);
console.log(p1.getFullName());
console.log(p2.lname);
console.log(p2.getFullName());
*/

/* in es6 */
// class Person {
//   constructor(fname, lname, dob) {
//     this.fname = fname;
//     this.lname = lname;
//     this.dob = new Date(dob);
//   }
//   getFullName() {
//     return `${this.fname} ${this.lname}`;
//   }
//   getFullYear() {
//     return this.dob.getFullYear();
//   }
// }
// const p1 = new Person("Mr", "john", "1-1-1990");
// console.log(p1.getFullName());

class Car {
  constructor(name, speed) {
    this.name = name;
    this.speed = speed;
  }
  getSpeed() {
    return this.speed;
  }
}
class NewModel extends Car {
  constructor(name, speed, model) {
    super(name, speed); //important
    this.model = model;
  }
  getModel() {
    console.log(this.model);
  }
}
//instantiate
const c1 = new NewModel("audi", 200, "2021");
console.log(c1.getSpeed());
c1.getModel();

// JavaScript Functions are First-Class Citizens

// const sum = (a, b) => a + b;
// const average = (a, b, fn) => fn(a, b) / 2;
// console.log(average(10, 20, sum));
