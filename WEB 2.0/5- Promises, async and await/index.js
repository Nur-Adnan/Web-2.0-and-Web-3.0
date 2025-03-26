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
