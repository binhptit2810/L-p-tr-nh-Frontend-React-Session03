type Student = {
    name : string;
    age : number;
    email : string;
}
let student = {
    name : "dang thanh binh",
    age : 19,
    email : "binh@gmail.com"

}
function print(sv:Student): void{
    console.log(`Tên tôi là ${sv.name}, tôi ${sv.age} tuổi và email của tôi là ${sv.email}`)
    
}
print(student)