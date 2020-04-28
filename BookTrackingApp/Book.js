export class Book {
  constructor(title, author, description, pages, currentPage, read) {
    this.title = title;
    this.author = author;
    this.description = description;
    this.pages = pages;
    this.currentPage = currentPage;
    this.read = false;
  }
  readBook(page) {
    if (page < 1 || page > this.pages) {
      return 0;
    } else {
      this.currentPage = page;
      if (page == this.pages) {
        this.read = true;
      }
    }
  }
}

let bookOne = new Book('davinci', 'danbrown', 'scifi', 300, 2, false);
let bookTwo = new Book('the alchemist', 'paulocoehlo', 'motivation', 195, 195, true);
let bookThree = new Book('5.00am club', 'robinsharma', 'motivation', 400, 200, true);

export const books = [bookOne, bookTwo, bookThree];