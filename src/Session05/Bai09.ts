class Book {
    private id: number
    private title: string
    private author: string
    private year: number
    constructor(id: number, title: string, author: string, year: number) {
        this.id = id;
        this.title = title;
        this.author = author
        this.year = year
    }
    public getId(): number {
        return this.id;
    }
    public getTitle(): string {
        return this.title;
    }
    public getInfo(): string {
        return `${this.id} - ${this.title} (Tác giả: ${this.author}, Năm XB: ${this.year})`;
    }
    public updateInfo(title: string, author: string, year: number): void {
        this.title = title;
        this.author = author;
        this.year = year;
    }
}
class Library {
    private books: Book[] = [];
    public addBook(book: Book): void {
        this.books.push(book);
    }

    public listBooks(): void {
        console.log(" Danh sách sách trong thư viện:");
        this.books.forEach((book) => console.log(book.getInfo()));
    }
    public deleteBookById(id: number): void {
        let oldLength = this.books.length;
        this.books = this.books.filter(book => book.getId() !== id);
        if (this.books.length < oldLength) {
            console.log(`Đã xóa sách có id = ${id}`);
        } else {
            console.log(`Không tìm thấy sách có id = ${id}`);
        }
    }
    public updateBookById(id: number, newTitle: string, newAuthor: string, newYear: number): void {
        let found = false;
        this.books.forEach(book => {
            if (book.getId() === id) {
                book.updateInfo(newTitle, newAuthor, newYear);
                found = true;
            }
        });
        if (found) {
            console.log(`Đã cập nhật sách có id = ${id}`);
        } else {
            console.log(`Không tìm thấy sách có id = ${id}`);
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
library.listBooks();
library.updateBookById(3, "dế mèn- Bản sửa", "tô hoài", 1950);
library.deleteBookById(2);
library.listBooks();
