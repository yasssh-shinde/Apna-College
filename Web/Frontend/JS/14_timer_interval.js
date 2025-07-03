setTimeout(() => {
  console.log("This runs after 2 seconds");
}, 2000);

let count = 0;
let interval = setInterval(() => {
  console.log("Counting:", ++count);
  if (count === 5) clearInterval(interval);
}, 1000);
