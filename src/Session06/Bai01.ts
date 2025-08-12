abstract class Shape {
  name: string;
  abstract getName(): string;
  abstract getSize(): number;
  constructor(name: string) {
    this.name = name;
  }
}
class Rectangle extends Shape {
  width: number;
  height: number;

  constructor(width: number, height: number, name: string) {
    super(name);
    this.width = width;
    this.height = height;
  }
  getName(): string {
    return `day la hinh ${this.name}`;
  }
  getSize(): number {
    return this.width * this.height;
  }
}
let chuNhat = new Rectangle(5, 6, "chu nhat");
console.log(chuNhat.getName()); 
console.log(chuNhat.getSize());
