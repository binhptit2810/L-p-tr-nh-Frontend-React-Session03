class Student {
  private id: number
  private name: string
  constructor(id: number, name: string) {
    this.id = id
    this.name = name
  }
  getId(): number {
    return this.id;
  }
  getName(): string {
    return this.name;
  }
}
let allStudents: Student[] = [];
class Classroom {
  students: Student[] = [];
  showStudents(): void {
    console.log("Danh sach hoc sinh:");
    this.students.forEach((student) => {
      console.log(`ID: ${student.getId()}, Name: ${student.getName()}`);
    });
  }
  addStudent(student: Student): void {
    this.students.push(student);
  }
  filterStudent(id: number): Student[] {
    return this.students.filter((student) => student.getId() === id);
  }
  addStudentInClass(studentId: number): void {
    const index = allStudents.findIndex((student) => student.getId() === studentId);
    if (index !== -1) {
      this.students.push(allStudents[index]);
      allStudents.splice(index, 1); 
    }
  }
}
allStudents.push(new Student(1, "An"));
allStudents.push(new Student(2, "Binh"));
allStudents.push(new Student(3, "quynh"));
allStudents.push(new Student(4, "quyen"));
allStudents.push(new Student(5, "dat"));
allStudents.push(new Student(6, "hoang"));
let class1 = new Classroom();
let class2 = new Classroom();
class1.addStudentInClass(1);
class1.addStudentInClass(2);
class1.addStudentInClass(3);

class2.addStudentInClass(4);
class2.addStudentInClass(5);
class2.addStudentInClass(6);

console.log("Lop 1:");
class1.showStudents();

console.log("Lop 2:");
class2.showStudents();

console.log("Tat ca hoc sinh con lai:", allStudents.length);
