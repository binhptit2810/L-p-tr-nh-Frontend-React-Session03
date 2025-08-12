abstract class Job {
    type: string;
    constructor(type:string) {
        this.type = type;
    }
    abstract printType(): void;
    abstract caculateSalary(): void;
}
class PartimeJob extends Job {
    workingHour: number;
    constructor(workingHour: number) {
        super("Partime");
        this.workingHour = workingHour
    }
    printType(): void {
        console.log(`Loai cong viec: ${this.type}`)
    }
    caculateSalary(): void {
        console.log(`Luong cua ban la ${30000 * this.workingHour}`)
    }
}
class FulltimeJob extends Job {
    constructor() {
        super("Fulltime");
    }
    printType(): void {
        console.log(`Loai cong viec: ${this.type}`)
    }
    caculateSalary(): void {
        console.log(`Luong cua ban la 10000000`)
    }
}
let PartimeJob1 = new PartimeJob(10)
let FulltimeJob1 = new FulltimeJob()
PartimeJob1.printType();
PartimeJob1.caculateSalary();
FulltimeJob1.printType();
FulltimeJob1.caculateSalary();
