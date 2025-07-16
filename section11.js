import { printArray, log, debugLog } from './logHelper.js';

function createBookShop(books) {
    return {
        books, // books: books,
        getPriceForBook(title) {
            const book = this.books.find(book => book.title === title);
            return book ? book.price : null;
        },
        getTotalPrice() {
            return this.books.reduce((total, book) => total + book.price, 0);
        }
    };
}

const books = [
    { title: "The Alchemist", price: 350 },
    { title: "JavaScript: The Good Parts", price: 499 },
    { title: "Clean Code", price: 599 },
    { title: "You Don't Know JS", price: 399 }
];

const bookShop = createBookShop(books);

debugLog("Price of 'The Alchemist':", bookShop.getPriceForBook("The Alchemist"));
debugLog("Total price of all books:", bookShop.getTotalPrice());

