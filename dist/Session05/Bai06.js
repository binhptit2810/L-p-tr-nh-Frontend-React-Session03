"use strict";
class Book {
    constructor(id, title, author) {
        this.id = id;
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
library.listBooks();
