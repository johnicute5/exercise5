import { Component, OnInit } from '@angular/core';
import { Book } from '../../models/book';
import { BookService } from '../../services/book.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
  providers: [BookService],
})
export class BookListComponent implements OnInit {
  myArrayofBooks: Book[] = [];
  blogs: Book | any;

  constructor(private myBookService: BookService) {}

  getBooks() {
    this.myBookService.getBooks().subscribe((data) => {
      this.myArrayofBooks = data;
    });
  }
  ngOnInit(): void {
    this.getBooks();
  }
}
