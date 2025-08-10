class Book {
    private id: number;
    private title: string;
    private author: string;
    constructor(id: number, title: string, author: string) {
        this.id = id;
        this.title = title;
        this.author = author;
    }
    public getInfo(): string {
        return `${this.id} - ${this.title} (Tác giả: ${this.author})`;
    }
}
class Library {
    private books: Book[] = [];
    public addBook(book: Book): void {
        this.books.push(book);
    }
    public listBooks(): void {
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
