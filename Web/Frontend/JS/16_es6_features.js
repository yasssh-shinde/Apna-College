"use strict";

function Person(name) {
  this.name = name;
}

Person.prototype.sayHello = function () {
  console.log("Hello, I am " + this.name);
};

let p1 = new Person("Yash");
p1.sayHello();
