abstract class Vehicle {
    protected name : string;
    protected speed : number
    protected id : number
    constructor(name : string,speed :number,id : number){
        this.name = name;
        this.speed = speed;
        this.id = id;
    }
    abstract slowDown(amount :number):void
    abstract speedUp(amount : number):void
    abstract showSpeed():void
}
class Bicycle extends Vehicle{
    private gear : number
    constructor(name : string,speed:number,id:number,gear : number){
        super(name,speed,id)
        this.gear = gear
    }
    slowDown(amount :number):void{
        this.speed -= amount
        console.log(`giảm tốc độ tốc độ hiện tại là ${this.speed} km/h`)
    }
    speedUp(amount : number):void {
        this.speed += amount
        console.log(`tăng tốc độ tốc độ hiện tại là ${this.speed} km/h`)
    }
    showSpeed():void{
        console.log(`tốc độ hiện tại là ${this.speed} `)
    }
    showInfo():string{
        console.log(`Xe ${this.name} tốc độ : ${this.speed} Mã định danh ${this.id} SỐ bánh răng ${this.gear} `) 
    }
}
let xeDap = new Bicycle ("dap ",30,123,30)
xeDap.speedUp(10)
xeDap.slowDown(5)
xeDap.showSpeed()
xeDap.showInfo()
