const { addBook, modifyFirstBook, removeLastBook, books } = require('../libraryManagement');

describe('Library Book Management System', () => {

    beforeEach(() => {
        books.length = 0;
    });

    test('addBook should add a book to the books array', () => {
        expect(books.length).toBe(0);
        addBook("The Great Gatsby", "F. Scott Fitzgerald", 1925);
        expect(books.length).toBe(1);
        expect(books[0]).toEqual({ title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 });
    });

    test('modifyFirstBook should modify the first book in the array', () => {
        addBook("The Great Gatsby", "F. Scott Fitzgerald", 1925);
        expect(books[0].title).toBe("The Great Gatsby");
        modifyFirstBook("The Greatest Gatsby", "F. Scott Fitzgerald", 1925);
        expect(books[0].title).toBe("The Greatest Gatsby");
        expect(books[0].author).toBe("F. Scott Fitzgerald");
        expect(books[0].year).toBe(1925);
    });

    test('removeLastBook should remove the last book from the books array', () => {
        addBook("The Great Gatsby", "F. Scott Fitzgerald", 1925);
        addBook("To Kill a Mockingbird", "Harper Lee", 1960);
        expect(books.length).toBe(2);
        removeLastBook();
        expect(books.length).toBe(1);
        expect(books[0]).toEqual({ title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 });
    });

});
