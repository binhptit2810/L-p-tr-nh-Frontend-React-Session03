"use strict";
class Shape {
    constructor(name) {
        this.name = name;
    }
}
class Rectangle extends Shape {
    constructor(width, height, name) {
        super(name);
        this.width = width;
        this.height = height;
    }
    getName() {
        return `day la hinh ${this.name}`;
    }
    getSize() {
        return this.width * this.height;
    }
}
let chuNhat = new Rectangle(5, 6, "chu nhat");
console.log(chuNhat.getName());
console.log(chuNhat.getSize());
