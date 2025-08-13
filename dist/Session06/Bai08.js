"use strict";
class Book {
    constructor(id, title, author, stock, status) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.stock = stock;
        this.status = status;
    }
}
class Member {
    constructor(id, name, contact, status) {
        this.id = id;
        this.name = name;
        this.contact = contact;
        this.lendedBooks = [];
        this.status = status;
    }
}
class LendedBook {
    constructor(memberId, bookId, dueDate) {
        this.memberId = memberId;
        this.bookId = bookId;
        this.dueDate = dueDate;
    }
}
class Library {
    constructor() {
        this.books = [];
        this.members = [];
    }
    addBook(book) {
        this.books.push(book);
        console.log(`Da them sach: ${book.title}`);
    }
    showBooks() {
        console.log("Danh sach sach trong thu vien:");
        this.books.forEach(b => {
            console.log(`ID: ${b.id} | Tieu de: ${b.title} | Tac gia: ${b.author} | So luong: ${b.stock} | Tinh trang: ${b.status}`);
        });
    }
}
let myLibrary = new Library();
let book1 = new Book(1, "conan", "Nguyen Van A", 5, "Co san");
let book2 = new Book(2, "dragon ball", "akira toriyama", 3, "Co san");
let book3 = new Book(3, "dế mèn", "tô hoài", 0, "Het hang");
myLibrary.addBook(book1);
myLibrary.addBook(book2);
myLibrary.addBook(book3);
myLibrary.showBooks();
