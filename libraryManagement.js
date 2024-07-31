//Write code here



//Needed for the test. Don't modify.
module.exports = {
  ...(typeof books !== 'undefined' && { books }),
  ...(typeof addBook !== 'undefined' && { addBook }),
  ...(typeof checkoutBook !== 'undefined' && { checkoutBook })
};
