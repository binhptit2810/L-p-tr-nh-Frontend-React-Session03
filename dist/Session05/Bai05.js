"use strict";
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    getWidth() {
        return this.width;
    }
    setWidth(width) {
        this.width = width;
    }
    getHeight() {
        return this.height;
    }
    setHeight(height) {
        this.height = height;
    }
    getArea() {
        return this.width * this.height;
    }
    getPerimeter() {
        return 2 * (this.width + this.height);
    }
}
let rec = new Rectangle(10, 20);
console.log("Chiều rộng:", rec.getWidth());
console.log("Chiều dài:", rec.getHeight());
console.log("Chu vi:", rec.getPerimeter());
console.log("Diện tích:", rec.getArea());
rec.setWidth(15);
rec.setHeight(25);
console.log("Chiều rộng mới:", rec.getWidth());
console.log("Chiều dài mới:", rec.getHeight());
console.log("Chu vi mới:", rec.getPerimeter());
console.log("Diện tích mới:", rec.getArea());
