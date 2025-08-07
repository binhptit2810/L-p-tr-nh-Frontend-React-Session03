"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function cong(a, b) {
    const soA = a * 1;
    const soB = b * 1;
    if (isNaN(soA) || isNaN(soB)) {
        return "Tham so khong hop le";
    }
    return soA + soB;
}
function tru(a, b) {
    const soA = a * 1;
    const soB = b * 1;
    if (isNaN(soA) || isNaN(soB)) {
        return "Tham so khong hop le";
    }
    return soA - soB;
}
function nhan(a, b) {
    const soA = a * 1;
    const soB = b * 1;
    if (isNaN(soA) || isNaN(soB)) {
        return "Tham so khong hop le";
    }
    return soA * soB;
}
function chia(a, b) {
    const soA = a * 1;
    const soB = b * 1;
    if (isNaN(soA) || isNaN(soB)) {
        return "Tham so khong hop le";
    }
    if (soB === 0) {
        return "Khong the chia cho 0";
    }
    return soA / soB;
}
console.log(cong("3", 4));
console.log(tru(10, "5"));
console.log(nhan("2", "3"));
console.log(chia("6", 2));
console.log(cong("a", 2));
//# sourceMappingURL=Bai08.js.map