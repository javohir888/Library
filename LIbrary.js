let  addBook = document.querySelector(".button");
let hidden = document.querySelector(".hidden-menu");
let title = document.querySelector('.inp');
let author = document.querySelector('.inp');
let pages = document.querySelector('.inp');
let read = document.querySelector('.inp');
let submit = document.querySelector(".submit");
let resultMenu = document.querySelector(".result-menu");
let nameP = document.querySelector(".name-p");
let authorP = document.querySelector(".author-p");
let pageP = document.querySelector(".page-p");
let readP = document.querySelector(".read-p");

nameP.textContent = `NAME: ${title}`;
authorP.textContent = `AUTHOR: ${author}`;
pageP.textContent = `PAGES: ${pages}`;
readP.textContent = `HAVE YOU READ? ${read}`;


addBook.addEventListener(`click`, addedBook); 
function addedBook() {
    hidden.classList.remove("hidden");
}

submit.addEventListener(`submit`, resultFun);
function resultFun() {
    resultMenu.classList.remove("hidden-result");
}

// function Book(title, author, pages, read) {
//     this.title = title;
//     this.author = author;
//     this.pages = pages;
//     this.read = read;
// }
// let objects = new Book();

