class Student{
    id: number;
    age: number;
    email : string
    constructor(id : number,age : number,email: string){
        this.id = id;
        this.age = age;
        this.email = email
    }
}
let firstStudent = new Student(1,18,"binh2810@gmail.com");
let secondStudent = new Student(2,19,"binh@gmai.com")
let listStudent = [];
listStudent.push(firstStudent)
listStudent.push(secondStudent)
for(let i=0;i<listStudent.length;i++){
    console.log(`ID : ${listStudent[i].id} Tuổi : ${listStudent[i].age} Email : ${listStudent[i].email}`)
    
}