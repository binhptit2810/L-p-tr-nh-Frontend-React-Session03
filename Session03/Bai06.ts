let num1: number = 20;
let num2: number = 5;
let num3: number;
let num4: string = "10";
let num5: boolean = true;
num3 = num1 + num2;
console.log(`num1 + num2 = ${num3}`);
num3 = num1 - num2;
console.log(`num1 - num2 = ${num3}`);
num3 = num1 * num2;
console.log(`num1 * num2 = ${num3}`);
num3 = num1 / num2;
console.log(`num1 / num2 = ${num3}`);
let ketQua = num4 + num5;
console.log(`num4 + num5 = ${ketQua}`);
// Khi cộng chuỗi ("10") với boolean (true),
// JavaScript/TypeScript sẽ **ép kiểu boolean về chuỗi**:
// true ➝ "true", nên kết quả là: "10" + "true" = "10true"