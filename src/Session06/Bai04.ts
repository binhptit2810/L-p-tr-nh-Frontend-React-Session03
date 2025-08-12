interface Geometry {
  calculateArea(): number;
  calculatePerimeter(): number;
}
class Circle implements Geometry {
  private radius: number;
  constructor(radius: number) {
    this.radius = radius;
  }
  calculateArea(): number {
    return Math.PI * this.radius * this.radius
  }
  calculatePerimeter(): number {
    return 2 * Math.PI * this.radius;
  }
}
class Rectangle implements Geometry {
  private width: number
  private height: number
  constructor(width: number, height: number) {
    this.width = width
    this.height = height
  }
  calculateArea(): number {
    return this.width * this.height
  }

  calculatePerimeter(): number {
    return 2 * (this.width + this.height);
  }
}
let hinhTron = new Circle(5);
let hinhChuNhat = new Rectangle(4, 6);
console.log("Hinh tron:");
console.log("Dien tich:", hinhTron.calculateArea());
console.log("Chu vi:", hinhTron.calculatePerimeter());

console.log("Hinh chu nhat:");
console.log("Dien tich:", hinhChuNhat.calculateArea());
console.log("Chu vi:", hinhChuNhat.calculatePerimeter());
