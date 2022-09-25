import { Component, Input, OnInit } from '@angular/core';
import { Book } from '../../models/book';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
  providers: [BookService]
})
export class BookListComponent implements OnInit {

  arrayOfBooks?:Book[] = [];

  constructor(private myBookServices:BookService) { }

  ngOnInit(): void {
    this.arrayOfBooks = this.myBookServices.showBooks();
  }

  editBook(id:number){
    alert(`Edit: ${id}`);
  }

  deleteBook(id:number){
    alert(`Delete: ${id}`);
  }
}
