const { books, addBook, checkoutBook } = require('../libraryManagement');

describe('Library Management', () => {
  beforeEach(() => {
    // Clear the books array before each test
    books.length = 0;
  });

  test('should create the books variable and initialize it as an empty array', () => {
    expect(Array.isArray(books)).toBe(true);
    expect(books.length).toBe(0);
  });

  test('should add a book to the books array', () => {
    addBook('1984', 'George Orwell', 1949, 'available');
    expect(books.length).toBe(1);
    expect(books[0]).toEqual({
      title: '1984',
      author: 'George Orwell',
      year: 1949,
      status: 'available'
    });
  });

  test('should checkout an available book', () => {
    addBook('1984', 'George Orwell', 1949, 'available');
    checkoutBook('1984');
    expect(books[0].status).toBe('checked out');
  });

  test('should not checkout a book that is already checked out', () => {
    console.log = jest.fn(); // Mock console.log
    addBook('1984', 'George Orwell', 1949, 'checked out');
    checkoutBook('1984');
    expect(console.log).toHaveBeenCalledWith('The book "1984" is already checked out.');
    expect(books[0].status).toBe('checked out');
  });

  test('should handle trying to checkout a book that does not exist', () => {
    console.log = jest.fn(); // Mock console.log
    checkoutBook('Nonexistent Book');
    expect(console.log).toHaveBeenCalledWith('The book "Nonexistent Book" is not found in the library.');
  });
});
