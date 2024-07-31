let books = [];

function addBook(title, author, year, status) {
  let book = { title: title, author: author, year: year, status: status };
  books.push(book);
}

function checkoutBook(title) {
  for (let book of books) {
    if (book.title === title) {
      if (book.status === 'available') {
        book.status = 'checked out';
      } else {
        console.log(`The book "${title}" is already checked out.`);
      }
      return;
    }
  }
  console.log(`The book "${title}" is not found in the library.`);
}

module.exports = {
  ...(typeof books !== 'undefined' && { books }),
  ...(typeof addBook !== 'undefined' && { addBook }),
  ...(typeof checkoutBook !== 'undefined' && { checkoutBook })
};
