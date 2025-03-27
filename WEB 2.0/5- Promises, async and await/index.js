function setTimeoutPromisified(duration) {
  return new Promise(function (resolve) {
    setTimeout(resolve, duration);
  });
}

function callback() {
  console.log("5 Seconds has passed");
}

setTimeoutPromisified(5000).then(callback);
// so here, it means that, after 5 second the callback function called.

// callback hell example

setTimeout(function () {
  console.log("Hi !");
  setTimeout(function () {
    console.log("Hello !");
    setTimeout(function () {
      console.log("Hello There !");
    }, 5000);
  }, 3000);
}, 1000);

// without using promise, you can also avoid callback hell

function step3Done() {
  console.log("Hello There !");
}

// step3Done() is called inside step2Done() after 5 seconds.

function step2Done() {
  console.log("Hello");
  setTimeout(step3Done, 5000); // Calls step3Done() after 5 seconds
}

// step2Done() is called inside step1Done() after 3 seconds.

function step1Done() {
  console.log("Hi !");
  setTimeout(step2Done, 3000); // Calls step2Done() after 3 seconds
}

// The whole process starts here with a delay of 1 second.
setTimeout(step1Done, 1000); // Calls step1Done() after 1 second.

// by using promise
function setTimeoutPromise(duration) {
  return new Promise(function (resolve) {
    setTimeout(resolve, duration);
  });
}

// promise chaining
setTimeoutPromise(1000)
  .then(function () {
    console.log("Hi !");
    return setTimeoutPromise(3000);
  })
  .then(function () {
    console.log("Hello.");
    return setTimeoutPromise(5000);
  })
  .then(function () {
    console.log("Hi There !");
  });

console.log("Outside the callback hell");

// async await
function setTimeoutAsync(duration) {
  return new Promise(function (resolve) {
    setTimeout(resolve, duration);
  });
}

async function solve() {
  await setTimeoutAsync(1000);
  console.log("Hi !");
  await setTimeoutAsync(3000);
  console.log("Hello.");
  await setTimeoutAsync(5000);
  console.log("Hi There !");
}

solve();
console.log("After the solve function");

// promise resolve, reject

const fs = require("fs");

function readAsync() {
  return new Promise(function (resolve, reject) {
    fs.readFile("a.txt", "utf-8", function (err, data) {
      if (err) {
        reject("File not found");
      } else {
        resolve(data);
      }
    });
  });
}

readAsync()
  .then(function () {
    console.log("File has been read");
  })
  .catch(function (e) {
    console.log(e);
  });
