**Lab: Library Book Management**

**Overview**
In this lab, you will create a simple system to manage a library's collection of books. You will use arrays to store lists of books and objects to represent individual books. The goal is to practice working with arrays and objects in JavaScript through basic operations like adding, modifying, and removing books.

**Objectives**
By the end of this lab, you should be able to:
- Create an array to store book objects.
- Write functions to add a book, modify the first book, and remove the last book in the array.

**Tools and Resources**
- Visual Studio Code
- Node.js
- GitHub repository https://github.com/learn-co-curriculum/phase-0-js-arrays-and-objects-lab.git
- Resources:
  - JavaScript Arrays
  - JavaScript Objects
  - Debugging JavaScript
  - MDN Web Docs: Debugger
  - W3 Schools: console.log()
  - Previous course material

**Instructions**

1. **Setup the Project**
   - Fork the GitHub repository provided by your instructor.
   - Clone the repository to your local machine.
   - Run `npm install` to set up the project dependencies.

2. **Open the Provided File**
   - Open the `libraryManagement.js` file provided in the repository.

3. **Declare the Arrays**
   - Declare an empty array named `books` to store book objects.

4. **Write Functions**
- Add a Book: Write a function called `addBook` that takes `title`, `author`, and `year` as parameters. Inside the function, create a book object with these properties and add it to the books array.

- Modify the First Book: Write a function called `modifyFirstBook` that takes `newTitle`, `newAuthor`, and `newYear` as parameters. This function should update the properties of the first book in the array.

- Remove the Last Book: Write a function called `removeLastBook` that removes the last book in the books array.

7. **Debug the Functions**
   - Insert `debugger` statements or use `console.log`'s to help solve the problem if needed.
   - Run the script with Node.js using the command `node inspect libraryManagement.js`.
   - Use debugging commands (`cont`, `repl`, `next`) to step through the code and inspect variable values.
