"use strict";
let staff = {
    name: "Nguyen van a",
    age: 28,
    employeeld: "EMP001",
    department: "Kế Toán"
};
function printStaffInfo(staff) {
    console.log(`${staff.name} (${staff.age} tuổi ) , Mã nhân viên : ${staff.employeeld} - Phòng: ${staff.department}`);
}
printStaffInfo(staff);
