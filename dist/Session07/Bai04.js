"use strict";
class Person {
    constructor(name) {
        this.name = name;
    }
}
class Student extends Person {
    constructor(id, name) {
        this.id = id;
        super(name);
    }
    displayInfo() {
        console.log(`Mã sinh viên : ${this.id} tên sinh viên ${this.name}`);
    }
}
class Teacher extends Person {
    constructor(subject, name) {
        super(name);
        this.subject = subject;
    }
    displayInfo() {
        console.log(`Tên giáo viên : ${this.name} Tên môn học ${this.subject} `);
    }
}
