"use strict";
class Vehicle {
    constructor(initialSpeed = 0) {
        this.speed = initialSpeed;
    }
    speedUp(amount) {
        this.speed += amount;
        console.log(`Toc do hien tai: ${this.speed} km/h`);
    }
    slowDown(amount) {
        this.speed -= amount;
        if (this.speed < 0)
            this.speed = 0;
        console.log(`Toc do hien tai: ${this.speed} km/h`);
    }
    stop() {
        this.speed = 0;
        console.log(`Phuong tien da dung. Toc do: ${this.speed} km/h`);
    }
}
let xe = new Vehicle();
xe.speedUp(50);
xe.slowDown(20);
xe.stop();
