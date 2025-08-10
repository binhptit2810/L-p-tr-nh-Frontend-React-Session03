"use strict";
class Vehicle {
    constructor(name, year, company) {
        this.name = name;
        this.year = year;
        this.company = company;
    }
}
let firstCar = new Vehicle("Honda", 2020, "honda");
let secondCar = new Vehicle("Camry", 2023, "toyota");
console.log("Xe 1");
console.log("Tên xe ", firstCar.name);
console.log("Năm sản xuất ", firstCar.year);
console.log("Hãng xe ", firstCar.company);
console.log("xe 2");
console.log("Tên xe ", secondCar.name);
console.log("Năm sản xuất ", secondCar.year);
console.log("Hãng xe ", secondCar.company);
