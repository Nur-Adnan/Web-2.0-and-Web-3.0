class Rectangle {
  constructor(width, height, color) {
    this.width = width;
    this.height = height;
    this.color = color;
  }
  area() {
    const area = this.width * this.height;
    return area;
  }
  paint() {
    return `Painting with color ${this.color}`;
  }
}

const rectangle = new Rectangle(2, 4, "white");
const area = rectangle.area();
const color = rectangle.paint();
console.log(area);
console.log(color);
