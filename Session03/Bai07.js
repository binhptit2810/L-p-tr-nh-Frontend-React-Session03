"use strict";
let cau = "hello world";
let ketQua = "";
for (let i = 0; i < cau.length; i++) {
    if (!ketQua.includes(cau[i])) {
        ketQua += cau[i];
    }
}
console.log("Chuoi ban dau: ", cau);
console.log("Chuoi da loai bo trung lap: ", ketQua);
//# sourceMappingURL=Bai07.js.map