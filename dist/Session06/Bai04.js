"use strict";
class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    calculateArea() {
        return Math.PI * this.radius * this.radius;
    }
    calculatePerimeter() {
        return 2 * Math.PI * this.radius;
    }
}
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    calculateArea() {
        return this.width * this.height;
    }
    calculatePerimeter() {
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
