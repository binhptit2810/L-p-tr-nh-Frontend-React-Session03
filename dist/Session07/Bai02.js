"use strict";
class Vehicle {
    constructor(name, speed, id) {
        this.name = name;
        this.speed = speed;
        this.id = id;
    }
}
class Bicycle extends Vehicle {
    constructor(name, speed, id, gear) {
        super(name, speed, id);
        this.gear = gear;
    }
    slowDown(amount) {
        this.speed -= amount;
        console.log(`giảm tốc độ tốc độ hiện tại là ${this.speed} km/h`);
    }
    speedUp(amount) {
        this.speed += amount;
        console.log(`tăng tốc độ tốc độ hiện tại là ${this.speed} km/h`);
    }
    showSpeed() {
        console.log(`tốc độ hiện tại là ${this.speed} `);
    }
    showInfo() {
        console.log(`Xe ${this.name} tốc độ : ${this.speed} Mã định danh ${this.id} SỐ bánh răng ${this.gear} `);
    }
}
let xeDap = new Bicycle("dap ", 30, 123, 30);
xeDap.speedUp(10);
xeDap.slowDown(5);
xeDap.showSpeed();
xeDap.showInfo();
