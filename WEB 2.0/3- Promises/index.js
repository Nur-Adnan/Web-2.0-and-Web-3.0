class Rectangle {
  constructor(width, height, color) {
    this.width = width;
    this.height = height;
    this.color = color;
  }
  area() {
    const area = this.width * this.height;
    console.log(this); // Rectangle { width: 2, height: 4, color: 'white'}
    return area;
  }
  paint() {
    return `Painting with color ${this.color}`;
  }
}

const rectangle = new Rectangle(2, 4, "white"); // instance or object of the rectangle class
const area = rectangle.area();
const color = rectangle.paint();
console.log(area);
console.log(color);

// objects
let user = {
  name: "Adnan",
  age: 26,
  gender: "male",
};

console.log(user.name);
// now updating the object
user.name = "Nur";
console.log(user.name);

// another way

const map = new Map();
map.set("name", "Chowdhury");
map.set("age", 26);
console.log(map.get("name"));

// a promise class gives you a promise, that i will return you something in the future
const fs = require("fs");

console.log("--- Top of the file ---");

// resolve arg..
function readFile(value) {
  console.log("Read Fill Called");
  fs.readFile("a.txt", "utf-8", function (err, data) {
    console.log("Callback based ReadFile Completed");
    value(data);
  });
}

// promise instance
function readPromiseFile() {
  console.log("readPromiseFile called");
  return new Promise(readFile);
  // first readfile call, after that readFile value means the argument called which somehow call the callback function.
}

const p = readPromiseFile();

function callback(contents) {
  console.log("Reading the file completed");
  console.log(contents);
}

p.then(callback);
console.log("-- End of the File --");
