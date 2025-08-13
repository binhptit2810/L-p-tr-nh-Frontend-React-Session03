"use strict";
class Job {
    constructor(type) {
        this.type = type;
    }
}
class PartimeJob extends Job {
    constructor(workingHour) {
        super("Partime");
        this.workingHour = workingHour;
    }
    printType() {
        console.log(`Loai cong viec: ${this.type}`);
    }
    caculateSalary() {
        console.log(`Luong cua ban la ${30000 * this.workingHour}`);
    }
}
class FulltimeJob extends Job {
    constructor() {
        super("Fulltime");
    }
    printType() {
        console.log(`Loai cong viec: ${this.type}`);
    }
    caculateSalary() {
        console.log(`Luong cua ban la 10000000`);
    }
}
let PartimeJob1 = new PartimeJob(10);
let FulltimeJob1 = new FulltimeJob();
PartimeJob1.printType();
PartimeJob1.caculateSalary();
FulltimeJob1.printType();
FulltimeJob1.caculateSalary();
