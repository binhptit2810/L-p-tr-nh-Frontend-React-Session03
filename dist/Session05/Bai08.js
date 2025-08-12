"use strict";
class Book {
    constructor(id, title, author) {
        this.id = id;
        this.title = title;
        this.author = author;
    }
    getId() {
        return this.id;
    }
    getTitle() {
        return this.title;
    }
    updateInfo(title, author) {
        this.title = title;
        this.author = author;
    }
    getInfo() {
        return `${this.id} - ${this.title} (Tác giả: ${this.author})`;
    }
}
class Library {
    constructor() {
        this.books = [];
    }
    addBook(book) {
        this.books.push(book);
    }
    listBooks() {
        console.log("Danh sách sách trong thư viện:");
        this.books.forEach((book) => {
            console.log(book.getInfo());
        });
    }
    updateBookById(id, newTitle, newAuthor) {
        let found = false;
        this.books.forEach((book) => {
            if (book.getId() === id) {
                book.updateInfo(newTitle, newAuthor);
                found = true;
            }
        });
        if (!found) {
            console.log(`Không tìm thấy sách có id = ${id}`);
        }
    }
    findBooksByTitle(keyword) {
        console.log(`Kết quả tìm kiếm với từ khóa "${keyword}":`);
        let results = this.books.filter(book => book.getTitle().toLowerCase().includes(keyword.toLowerCase()));
        if (results.length > 0) {
            results.forEach(book => console.log(book.getInfo()));
        }
        else {
            console.log("Không tìm thấy sách nào.");
        }
    }
}
let b1 = new Book(1, "conan", "thanh binh");
let b2 = new Book(2, "doraemon", "quyen xiu");
let b3 = new Book(3, "dragon ball", "nhu quynh");
let b4 = new Book(4, "Tắt đèn", "Ngô Tất Tố");
let b5 = new Book(5, "Vợ nhặt", "Kim Lân");
let library = new Library();
library.addBook(b1);
library.addBook(b2);
library.addBook(b3);
library.addBook(b4);
library.addBook(b5);
library.findBooksByTitle("dragon");
library.findBooksByTitle("conan");
