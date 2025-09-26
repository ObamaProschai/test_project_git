class Library {
    constructor(libTitle) {
        this.libraryTitle = libTitle;          // Присваиваем значение
        this.books = [];                      // books теперь массив
        this.totalBooks = 0;                  // Общее количество книг
        this.borrowedBooks = 0;               // Количество выданных книг
    }

    addBook(title, author, year, isnb, quantity = 1) {
        const newBook = {
            title: title,
            author: author,
            isnb: isnb,
            year: year,
            totalQuantity: quantity,          // Кол-во экземпляров
            availableQuantity: quantity,      // Доступных экземпляров
            borrowedBy: []
        };
        
        const findBook = this.books.find(book => book.isnb === isnb); // Используем .find()
        
        if (findBook) {
            findBook.totalQuantity += quantity;
            findBook.availableQuantity += quantity;
        } else {
            this.books.push(newBook);
        }
        return newBook;
    }
    
    findBook(searchTerm) {
        let foundBooks= this.books.filter(book => book.title.includes(searchTerm));
        if (foundBooks.length){
            return foundBooks;
        } else {
            foundBooks = this.books.filter(book => book.author.includes(searchTerm));
            if (foundBooks.length) {
                return foundBooks;
            } else {
                foundBooks = this.books.filter(book => book.isbn == searchTerm);
                return foundBooks;
            }
        }
    }
}

const library = new Library("Тестовая библиотека");

library.addBook("JavaScript для начинающих", "Иван Петров", 2023, "JS-001", 5);
library.addBook("React продвинутый", "Мария Сидорова", 2024, "REACT-002", 3);
library.addBook("React продвинутый", "Мария Сидорова", 2024, "REACT-002", 1);

console.log(library.books);

const foundBooks = library.findBook("ю");
console.log(foundBooks.length); // Вернет 1
