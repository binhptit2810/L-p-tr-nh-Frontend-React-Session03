class Book {
    private id: number;
    private title: string;
    private author: string;
    constructor(id: number, title: string, author: string) {
        this.id = id
        this.title = title
        this.author = author
    }
    public getId(): number {
        return this.id;
    }
    public getTitle(): string {
        return this.title;
    }
    public updateInfo(title: string, author: string): void {
        this.title = title;
        this.author = author;
    }
    public getInfo(): string {
        return `${this.id} - ${this.title} (Tác giả: ${this.author})`;
    }
}
class Library {
    private books: Book[] = []
    public addBook(book: Book):void {
        this.books.push(book);
    }
    public listBooks(): void {
        console.log("Danh sách sách trong thư viện:")
        this.books.forEach((book) => {
            console.log(book.getInfo())
        });
    }
    public updateBookById(id: number, newTitle: string, newAuthor: string): void {
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
    public findBooksByTitle(keyword: string): void {
        console.log(`Kết quả tìm kiếm với từ khóa "${keyword}":`);
        let results = this.books.filter(book =>
            book.getTitle().toLowerCase().includes(keyword.toLowerCase())
        );
        if (results.length > 0) {
            results.forEach(book => console.log(book.getInfo()));
        } else {
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
