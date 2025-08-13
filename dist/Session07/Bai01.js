"use strict";
class Employee {
    constructor(name, company, phone) {
        this.name = name;
        this.company = company;
        this.phone = phone;
    }
    printInfo() {
        return `Tên NV : ${this.name} Tên công ty : ${this.company} sđt : ${this.phone} `;
    }
}
class Manager extends Employee {
    constructor(name, company, phone, teamSize) {
        super(name, company, phone);
        this.teamSize = teamSize;
    }
    printInfo() {
        return `Tên NV : ${this.name} Tên công ty : ${this.company} sđt : ${this.phone} số thành viên : ${this.teamSize} `;
    }
}
let nv1 = new Manager("dang thanh binh ", "rikkei", 123456, 4);
console.log(nv1.printInfo());
