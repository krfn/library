let myLibrary = [];
const display = document.getElementById('library');

addBooktoLibrary(new Book("The Hobbit", "J. R. R. Tolkien", 400, "completed"));
addBooktoLibrary(new Book("Republic", "Plato", 300, "completed"));

for (book of myLibrary) { displayBook(book) }

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

function removeBookfromLibrary(index) {
    myLibrary.splice(index);
}

function displayBook(book) { 
    const cellLeft = document.createElement('div');
    const cellRight = document.createElement('div');

    const details = document.createElement('p');
    details.textContent = book.info();

    const removeButton = document.createElement('button');
    removeButton.type = 'button';
    removeButton.id = myLibrary.indexOf(book);
    removeButton.className = 'remove';
    removeButton.textContent = 'Remove';
    removeButton.addEventListener('click', function() {
        cellLeft.remove();
        cellRight.remove();
        removeBookfromLibrary(removeButton.id);
    });

    display.appendChild(cellLeft);
    display.appendChild(cellRight);
    cellLeft.appendChild(details);
    cellRight.appendChild(removeButton);
}

function submitForm() {
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;

    const book = new Book(title, author, pages, "completed");
    addBooktoLibrary(book);
    displayBook(book);
}