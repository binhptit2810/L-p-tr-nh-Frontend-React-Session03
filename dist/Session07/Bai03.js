"use strict";
class Animal {
    constructor(name) {
        this.name = name;
    }
    printName() {
        console.log(`Tên của động vật là : ${this.name} `);
    }
}
class Dog extends Animal {
    constructor(name) {
        super(name);
    }
    makeNoise() {
        console.log(` kêu gâu gâu `);
    }
}
class Cat extends Animal {
    constructor(name) {
        super(name);
    }
    makeNoise() {
        console.log(`kêu meo meo `);
    }
}
let cat = new Cat("mèo");
let dog = new Dog("chó");
cat.printName();
cat.makeNoise();
dog.printName();
dog.makeNoise();
