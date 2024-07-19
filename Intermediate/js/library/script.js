const library = []
function book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

book.prototype.toggleRead = function (){
    this.read = !this.read;
}

const exampleBooks = [
    { title: "To Kill a Mockingbird", author: "Harper Lee", pages: 281, read: true },
    { title: "1984", author: "George Orwell", pages: 328, read: false },
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", pages: 180, read: true },
    { title: "Pride and Prejudice", author: "Jane Austen", pages: 432, read: false },
    { title: "The Catcher in the Rye", author: "J.D. Salinger", pages: 234, read: true }
  ];
  
  exampleBooks.forEach(Book => {
    library.push(new book(Book.title, Book.author, Book.pages, Book.read));
});

function addBookTolibrary (){
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const pages = document.getElementById("pages").value;
    const read = document.getElementById("read").checked;

    const newbook = new book(title, author, pages, read);
    library.push(newbook);
    displayLibrary();
}

function displayLibrary(){
    const libraryEl = document.getElementById("library");
    libraryEl.innerHTML = "";

    for (let i = 0; i< library.length; i++){
        const book = library[i];
        const bookEl = document.createElement('div');
        bookEl.classList.add('book');
        bookEl.innerHTML = `
            <h3>${book.title}</h3>
            <p>Author: ${book.author}</p>
            <p>Pages: ${book.pages}</p>
            <p>Read: ${book.read ? 'Yes' : 'No'}</p>
            <button onclick="removeBook(${i})">Remove</button>
            <button onclick="toggleRead(${i})">Toggle Read</button>
        `;
        bookEl.setAttribute('dataindex', i)
        libraryEl.appendChild(bookEl)
    }
}
function removeBook(index){
    library.splice(index, 1)
    displayLibrary()
}

function toggleRead(index){
    console.log(library[index])
    library[index].toggleRead();
    displayLibrary();
}

document.getElementById('new-book-form').addEventListener('submit', function(event) {
    event.preventDefault();
    addBookTolibrary();
    this.reset();
  });

  displayLibrary();