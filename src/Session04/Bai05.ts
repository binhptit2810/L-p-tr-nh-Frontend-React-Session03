type Person = {
    name : string;
    age : number;
}
type Employee = {
    employeeld : string;
    department : string;
}
type StaffMember = Person & Employee
let staff = {
    name : "Nguyen van a",
    age : 28,
    employeeld : "EMP001",
    department : "Kế Toán"
}
function printStaffInfo(staff:StaffMember): void{
    console.log(`${staff.name} (${staff.age} tuổi ) , Mã nhân viên : ${staff.employeeld} - Phòng: ${staff.department}`) 
}
printStaffInfo(staff)