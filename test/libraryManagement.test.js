const { addBook, modifyFirstBook, removeLastBook, books } = require('../libraryManagement');

describe('Library Book Management System', () => {

    beforeEach(() => {
        // Reset the books array before each test
        books.length = 0;
    });

    test('addBook should add a book to the books array', () => {
        expect(books.length).toBe(0); // Initial state: empty array
        addBook("The Great Gatsby", "F. Scott Fitzgerald", 1925);
        expect(books.length).toBe(1); // After adding: array should have 1 book
        expect(books[0]).toEqual({ title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 });
    });

    test('modifyFirstBook should modify the first book in the array', () => {
        addBook("The Great Gatsby", "F. Scott Fitzgerald", 1925);
        expect(books[0].title).toBe("The Great Gatsby"); // Before modification
        modifyFirstBook("The Greatest Gatsby", "F. Scott Fitzgerald", 1925);
        expect(books[0].title).toBe("The Greatest Gatsby"); // After modification
        expect(books[0].author).toBe("F. Scott Fitzgerald");
        expect(books[0].year).toBe(1925);
    });

    test('removeLastBook should remove the last book from the books array', () => {
        addBook("The Great Gatsby", "F. Scott Fitzgerald", 1925);
        addBook("To Kill a Mockingbird", "Harper Lee", 1960);
        expect(books.length).toBe(2); // Initial state: array has 2 books
        removeLastBook();
        expect(books.length).toBe(1); // After removing: array should have 1 book
        expect(books[0]).toEqual({ title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 });
    });

});
