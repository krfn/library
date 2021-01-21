let myLibrary = [];
addBooktoLibrary(new Book("The Hobbit", "J. R. R. Tolkien", 400, "completed"));
addBooktoLibrary(new Book("Republic", "Plato", 300, "completed"));

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.info = function() {
        return title + " by " + author + ", " + pages + " pages, " + read;
    }
}

function addBooktoLibrary(book) {
    myLibrary.push(book);
}

function displayBooks() {
    const library = document.getElementById('library');
    for (item of myLibrary) {
        let book = document.createElement('p');
        book.textContent = item.info();
        library.appendChild(book);
    }
}

function showForm() {
    document.getElementById('formElement').style.display = 'block';
}

displayBooks();