"use strict";
class Employee {
    constructor(name, company, phone) {
        this.name = name;
        this.phone = phone;
        this.company = company;
    }
    printInfo() {
        console.log(`Tên :${this.name} công ty :${this.company} Số đt ${this.phone}`);
    }
}
let em = new Employee("dang thanh binh", "rikkei", 12345);
em.printInfo();
