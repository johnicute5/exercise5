import { Injectable } from '@angular/core';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root'
})

export class BookService {

  arrayOfBooks:Book[] = [

    {
      id: 10101,
      name: "Smarty Pants",
      author: ["The Engraved Scripture", "Wordy Memo", "White Collar Co."],
      isbn: "8147852369"
    },

    {
      id: 10102,
      name: "Witty Whitman",
      author: ["The Witty Writer", "Director-E", "Author F"],
      isbn: "1344457369"
    },

    {
      id: 10103,
      name: "Coffee, Books and Me",
      author: ["The InkPot", "Ancient Leger", "The Write Ability"],
      isbn: "1234554321"
    }

  ];

  constructor() { }

  showBooks() {
    return this.arrayOfBooks;
  }

}
