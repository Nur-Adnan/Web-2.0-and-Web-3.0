const fs = require("fs");

const content = fs.readFile("b.txt", "utf-8", function (err, content) {
  console.log(content);
}); // asynchronously

const data = fs.readFileSync("a.txt", "utf-8"); // reading the file synchronously
console.log(data);

function sum(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

const ans = sub(10, 5);
console.log(ans);

// passing a function as an argument

function doOperation(a, b, op) {
  return op(a, b);
}

console.log(doOperation(15, 5, divide));

function timeOut() {
  console.log("Click the button");
}

console.log("Hi !");

setTimeout(timeOut, 1500);
console.log("Welcome to loop");

// to make a setTimeout sync

function setTimeoutSync(timeout) {
  let startTime = new Date();
  while (1) {
    let currentTime = new Date();
    if (currentTime.getTime() - startTime.getTime() > 1) {
      break;
    }
  }
}

setTimeoutSync(1000);
console.log("Hi Adnan Chowdhury !");
