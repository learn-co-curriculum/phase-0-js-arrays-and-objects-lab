//Write code here
// Declare the array to store books
const books = [];

// Function to add a book
function addBook(title, author, year) {
  const book = { title, author, year };
  books.push(book);
}

// Function to modify the first book
function modifyFirstBook(newTitle, newAuthor, newYear) {
  books[0].title = newTitle;
  books[0].author = newAuthor;
  books[0].year = newYear;
}

// Function to remove the last book
function removeLastBook() {
  books.pop(); // Remove the last book from the array
}

//Needed for the test. Don't modify.
module.exports = {
  addBook: typeof addBook !== 'undefined' ? addBook : undefined,
  modifyFirstBook: typeof modifyFirstBook !== 'undefined' ? modifyFirstBook : undefined,
  removeLastBook: typeof removeLastBook !== 'undefined' ? removeLastBook : undefined,
  books
};
