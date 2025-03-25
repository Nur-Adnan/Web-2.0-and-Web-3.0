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
