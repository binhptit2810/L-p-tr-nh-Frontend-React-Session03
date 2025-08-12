"use strict";
class Job {
    constructor(type) {
        this.type = type;
    }
}
class PartimeJob extends Job {
    constructor(workingHour) {
        this.workingHour = workingHour;
    }
    caculateSalary() {
        return `lương của bạn là ${3000 * this.workingHour}`;
    }
}
class FulltimeJob extends Job {
    caculateSalary() {
        console.log(`Lương của bạn là 10000000 `);
    }
}
let PartimeJob1 = new PartimeJob();
let FulltimeJob1 = new FulltimeJob();
PartimeJob1.caculateSalary(10);
FulltimeJob1.caculateSalary();
