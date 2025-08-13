abstract class Animal {
    public name : string
    constructor(name : string){
        this.name = name
    }
    abstract makeNoise(): string;
    printName(): string{
        console.log(`Tên của động vật là : ${this.name} `)
    }
}
class Dog extends Animal{
    constructor(name: string){
        super(name)
    }
    makeNoise():string{
        console.log(` kêu gâu gâu `)
    }
}
class Cat extends Animal{
     constructor(name: string){
        super(name)
    }
    makeNoise():string{
        console.log(`kêu meo meo `)
    }
}
let cat = new Cat("mèo")
let dog = new Dog("chó")
cat.printName()
cat.makeNoise()
dog.printName()
dog.makeNoise()