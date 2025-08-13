class Employee {
    public name : string;
    protected company : string;
    private phone : number
    constructor(name : string,company : string,phone : number){
        this.name = name;
        this.company = company
        this.phone = phone
    }
    printInfo(): string {
        return `Tên NV : ${this.name} Tên công ty : ${this.company} sđt : ${this.phone} `
    }
}
class Manager extends Employee{
    teamSize : number;
    constructor(name : string,company : string,phone: number,teamSize : number){
            super(name,company,phone)
            this.teamSize = teamSize
    }
    printInfo():string{
          return `Tên NV : ${this.name} Tên công ty : ${this.company} sđt : ${this.phone} số thành viên : ${this.teamSize} `
    }
}
let nv1 = new Manager("dang thanh binh ","rikkei",123456,4)
console.log(nv1.printInfo());