// Khai báo biến kiểu string
let strValue: string = "2";
let numValue: number = 2;
console.log("strValue == numValue:", strValue == numValue);
console.log("strValue === numValue:", strValue === numValue); 
/*
Giải thích:
- Toán tử == là so sánh lỏng, cho phép chuyển đổi kiểu 
  nên "2" sẽ được chuyển thành số 2 rồi mới so sánh → kết quả true.
- Toán tử === là so sánh chặt, không cho phép chuyển đổi kiểu.
  Ở đây "2" là string, còn 2 là number → khác kiểu → kết quả false.
*/
