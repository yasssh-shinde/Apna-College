let user = {
  name: "Yash",
  age: 23,
  greet: function () {
    return `Hi, I am ${this.name}`;
  }
};

console.log(user.greet());
