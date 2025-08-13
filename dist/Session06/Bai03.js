"use strict";
// abstract method chỉ được định nghĩa bên trong abstract class
// abstract method bắt các lớp con phải override và triển khai logic cụ thể
// ko thể gọi trực tiếp từ abstract class vì nó ko có code thực thi
// method là hàm được định nghĩa đầy đủ bên trong class
// có thể chứa logic xử lí và được gọi trục tiếp từ đối tượng
// nên dùng abstract method khi đặt ra khuôn mẫu cho lớp con triển khai
// nên dùng abstract method khi muốn đảm bảo mọi lớp con đều phải có phương thức đó
// nên dùng method khi class có thể tự định nghĩa sẵn hành vi
// nên dùng method khi ko bắt buộc lớp con phải viết lại
// ví dụ cho method
class Animal {
    constructor(name) {
        this.name = name;
    }
    speak() {
        console.log(`${this.name} dang keu`);
    }
}
let dog = new Animal("gau gau");
dog.speak();
// ví dụ cho abstract method
class DongVat {
}
class Cho extends DongVat {
    keu() {
        console.log("Gau gau");
    }
}
let dog1 = new Cho();
dog1.keu();
