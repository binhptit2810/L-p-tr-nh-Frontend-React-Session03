class Vehicle{
    public name: string;
    protected year : number;
    private company : string;
    readonly id : number;
    constructor(name : string,year : number,company : string,id:number){
        this.name = name;
        this.year = year;
        this.company = company;
        this.id= id;
    }
    printInfo():void{
        console.log(`tên :${this.name} năm sx :${this.year} công ty ${this.company} id: ${this.id} `)
    }
    
}
let car = new Vehicle("vf3",2024,"vinfast",1);
car.printInfo();
