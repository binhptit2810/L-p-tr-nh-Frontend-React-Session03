class Employee{
    public name : string;
    protected company : string;
    private phone : number;
    constructor (name : string,company : string,phone : number){
        this.name = name;
        this.phone = phone
        this.company = company
    }
    printInfo():void{
        console.log(`Tên :${this.name} công ty :${this.company} Số đt ${this.phone}` )
    }

}
let em = new Employee("dang thanh binh","rikkei",12345);
em.printInfo();