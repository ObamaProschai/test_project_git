class Library {
    constructor(libTitle) {
        this.libraryTitle
        this.books = {};
        this.totalBooks = 0;    // общее кол-во книг
        this.borrowedBooks = 0; // кол-во выданныйх книг
    }

    // Добавим новую книгу,Если `isnb` уже есть в базе,
    // То увеличим кол-во книг. (поле `quantite`)
    addBook(title, author, year, isnb, quantity = 1){
        const newBook = {
            title: title,
            author: author,
            isnb: isnb,
            year: year,
            totalQuantity: quantity,    // кол-во экземпляров
            availableQuantity: quantity,    // кол-во доступных для выдачи
            borrowedBy: []  // список читателей кто брал книгу
        }
        const findBook = this.books.filter(book => book.isbn == isbn);
        if (findBook.length){
            for (var i = 0; i <= this.books.lengt; i++) {
                if (this.book == findBook[0]) {
                    this.books[i].totalQuantity += quantity;
                    this.books[i].availableQuantity += quantity;
                }
            }
        } else {
            this.books.push(newBook)
        }
        return newBook;
    }

}
const library = new Library("Тестовая библиотека");

// Добавляем книги 
library.addBook("JavaScript для начинающих", "Иван Петров", 2023, "JS-001", 5);
library.addBook("React продвинутый", "Мария Сидорова", 2024, "REACT-002", 3);
library.addBook("React продвинутый", "Мария Сидорова", 2024, "REACT-002", 1);
console.log(library.books);

