let nums = [1, 2, 3, 4, 5];

let doubled = nums.map(num => num * 2);
let even = nums.filter(num => num % 2 === 0);
let sum = nums.reduce((acc, cur) => acc + cur, 0);

console.log(doubled, even, sum);
