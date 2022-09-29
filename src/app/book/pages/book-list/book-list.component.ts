import { Component, OnInit } from '@angular/core';
import { Book } from '../../models/book';
import { BookService } from '../../services/book.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
  providers: [BookService]
})
export class BookListComponent implements OnInit {

  arrayOfBooks?:Book[] = [];

  constructor(private myBookServices:BookService,private router:Router) { }

  ngOnInit(): void {
    this.arrayOfBooks = this.myBookServices.showBooks();
  }

}

