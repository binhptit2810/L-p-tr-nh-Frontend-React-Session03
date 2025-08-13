"use strict";
class Student {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    getId() {
        return this.id;
    }
    getName() {
        return this.name;
    }
    setName(newName) {
        this.name = newName;
    }
}
let allStudents = [];
class Classroom {
    constructor() {
        this.students = [];
    }
    showStudents() {
        console.log("Danh sach hoc sinh trong lop:");
        if (this.students.length === 0) {
            console.log("Lop khong co hoc sinh nao");
            return;
        }
        this.students.forEach(s => {
            console.log(`ID: ${s.getId()}, Ten: ${s.getName()}`);
        });
    }
    addStudent(student) {
        this.students.push(student);
    }
    filterStudent(id) {
        return this.students.find(s => s.getId() === id);
    }
    addStudentInClass(id) {
        let index = allStudents.findIndex(s => s.getId() === id);
        if (index !== -1) {
            this.students.push(allStudents[index]);
            allStudents.splice(index, 1);
        }
        else {
            console.log(`Khong tim thay hoc sinh co ID ${id} trong allStudents`);
        }
    }
    removeStudent(id) {
        let index = this.students.findIndex(s => s.getId() === id);
        if (index !== -1) {
            allStudents.push(this.students[index]);
            this.students.splice(index, 1);
        }
        else {
            console.log(`Khong tim thay hoc sinh co ID ${id} trong lop`);
        }
    }
    editStudent(id, newName) {
        let student = this.filterStudent(id);
        if (student) {
            student.setName(newName);
        }
        else {
            console.log(`Khong tim thay hoc sinh co ID ${id} trong lop`);
        }
    }
}
for (let i = 1; i <= 6; i++) {
    allStudents.push(new Student(i, `Hoc sinh ${i}`));
}
let classA = new Classroom();
let classB = new Classroom();
classA.addStudentInClass(1);
classA.addStudentInClass(2);
classA.addStudentInClass(3);
classB.addStudentInClass(4);
classB.addStudentInClass(5);
classB.addStudentInClass(6);
console.log("Truoc khi thay doi");
classA.showStudents();
classB.showStudents();
console.log("Tat ca hoc sinh con lai trong allStudents:", allStudents.map(s => s.getName()));
classA.removeStudent(2);
classB.editStudent(4, "Hoc sinh VIP 4");
console.log("\nSau khi thay doi");
classA.showStudents();
classB.showStudents();
console.log("Tat ca hoc sinh trong allStudents:", allStudents.map(s => s.getName()));
