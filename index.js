import Books from './Books.js';

const books = new Books();
const addBookBtn = document.getElementById('add-book-btn');

addBookBtn.addEventListener('click', () => {
  books.addBook();
});

const date = new Date();

const secondes = date.getSeconds();
const hour = date.getHours();
const minutes = date.getMinutes();
const day = date.getDate();
const month = date.getMonth() + 1;
const year = date.getFullYear();
const ampm = hour >= 12 ? 'pm' : 'am';

const currentDate = `${day}.${month}.${year}, ${hour}:${minutes}:${secondes} ${ampm}`;
const todayDate = document.getElementById('date');
todayDate.insertAdjacentHTML('afterbegin', currentDate);
