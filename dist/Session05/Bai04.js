"use strict";
class Vehicle {
    constructor(name, year, company, id) {
        this.name = name;
        this.year = year;
        this.company = company;
        this.id = id;
    }
    printInfo() {
        console.log(`tên :${this.name} năm sx :${this.year} công ty ${this.company} id: ${this.id} `);
    }
}
let car = new Vehicle("vf3", 2024, "vinfast", 1);
car.printInfo();
