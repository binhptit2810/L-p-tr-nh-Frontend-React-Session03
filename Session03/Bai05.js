"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let firstName = "john";
let lastName = "doe";
function vietHoaChuCaiDau(chuoi) {
    if (chuoi.length === 0)
        return chuoi;
    return chuoi.charAt(0).toUpperCase() + chuoi.slice(1);
}
firstName = vietHoaChuCaiDau(firstName);
lastName = vietHoaChuCaiDau(lastName);
let fullName = `${firstName} ${lastName}`;
console.log("Ho ten day du:", fullName);
//# sourceMappingURL=Bai05.js.map