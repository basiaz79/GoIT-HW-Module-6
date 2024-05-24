// Przykład użycia słowa kluczowego 'this' w Javascript
const person = {
    name: 'Maciej',
    showName: function() {
        console.log(this.name);
    }
};

person.showName(); // Output: Maciej


console.log("\n\n\n");



// Obiekt reprezentujący półkę na książki
const bookshelf = {
    authors: [],
    // zwraca tablicę autorów na półce z książkami
    getAuthors: function() {
        return this.authors;  
    },
    // dodaje autora do półki na książki
    addAuthor: function(authorName) {
        this.authors.push(authorName);
    }
};


// Testowanie metod obiektu bookshelf 
bookshelf.addAuthor('Stephen King');
bookshelf.addAuthor('J.K. Rowling');


console.log(bookshelf.getAuthors()); // Output: ["Stephen King", "J.K. Rowling"]



  
  
  