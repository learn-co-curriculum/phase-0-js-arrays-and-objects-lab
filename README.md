**Lab: Library Book Management**

**Overview**
Imagine you are working for a library that needs to manage its collection of books and their availability status. Your task is to create a system to manage book information and track their availability. You will use arrays to store lists of books, objects to represent individual books, and debugging techniques to ensure everything works correctly. This lab will help you practice and apply the skills you've learned in a realistic scenario, with a heavy emphasis on using debugging tools to solve problems.

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

4. **Create Book Objects**
   - Define objects for each book and add them to the `books` array.
   - Each book object should have the properties: `title` (string), `author` (string), `year` (number), and `status` (string: 'available' or 'checked out').

5. **Document the Add Book Function**
   - Write a function `addBook` that takes `title`, `author`, `year`, and `status` as parameters.
   - Inside the function, create a book object with these properties and add it to the `books` array.

6. **Create a Function to Check Out a Book**
   - Write a function `checkoutBook` that takes `title` as a parameter.
   - Inside the function, find the book in the `books` array and change its `status` to 'checked out'.
   - If the book is already checked out, print a message indicating that the book is not available in this format.
   `The book "${title}" is already checked out.`
   - If the book is not in the array of books, print a message stating it's not found in this format. `The book "${title}" is not found in the library.`

7. **Debug the Functions**
   - Insert `debugger` statements or use `console.log`'s to help solve the problem if needed.
   - Run the script with Node.js using the command `node inspect libraryManagement.js`.
   - Use debugging commands (`cont`, `repl`, `next`) to step through the code and inspect variable values.
