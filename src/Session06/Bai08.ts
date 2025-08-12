abstract class Item {
    id: number;
    title: string;
    status: string;
    constructor(id: number, title: string, status: string) {
        this.id = id;
        this.title = title;
        this.status = status;
    }
    abstract getInfo(): void;
}
class Book extends Item {
    author: string;
    stock: number;
    constructor(id: number, title: string, author: string, stock: number, status: string){
        super(id, title, status)
        this.author = author
        this.stock = stock;
    }
    getInfo(): void {
        console.log(`Book: ${this.title} - Author: ${this.author} - Stock: ${this.stock} - Status: ${this.status}`);
    }
}
abstract class Person {
    id: number;
    name: string;
    contact: string;
    constructor(id: number, name: string, contact: string) {
        this.id = id;
        this.name = name;
        this.contact = contact;
    }
    abstract showProfile(): void;
}

class Member extends Person {
    lendedBooks: Book[];
    status: string;
    constructor(id: number, name: string, contact: string, status: string) {
        super(id, name, contact);
        this.lendedBooks = [];
        this.status = status;
    }
    showProfile(): void {
        console.log(`Member: ${this.name} - Status: ${this.status} - Contact: ${this.contact}`);
    }
}
let book1 = new Book(1, "dế mèn", "tô hoài", 3, "Available");
let member1 = new Member(101, "Bình", "0123456789", "Active");
book1.getInfo();
member1.showProfile();
