let heading = document.getElementById("main-heading");
let buttons = document.querySelectorAll(".btn");

heading.textContent = "Updated Title";
buttons.forEach(btn => btn.style.color = "blue");
