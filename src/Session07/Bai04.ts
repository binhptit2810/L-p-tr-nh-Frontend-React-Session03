abstract class Person {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    abstract displayInfo(): void;
}
class Student extends Person {
    id: number;
    constructor(id: number, name: string) {
        super(name);
        this.id = id;
    }
    displayInfo(): void {
        console.log(`Mã sinh viên: ${this.id} - Tên sinh viên: ${this.name}`);
    }
}
class Teacher extends Person {
    subject: string;
    constructor(subject: string, name: string) {
        super(name); 
        this.subject = subject;
    }
    displayInfo(): void {
        console.log(`Tên giáo viên: ${this.name} - Tên môn học: ${this.subject}`);
    }
}
let student1 = new Student(1, "binh");
let teacher1 = new Teacher("Toán", "bách");
student1.displayInfo();
teacher1.displayInfo();
