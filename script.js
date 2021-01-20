let myLibrary = [];

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
    for (book of myLibrary) {
        console.log(book.info());
    }
}