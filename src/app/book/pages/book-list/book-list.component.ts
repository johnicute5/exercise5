import { Component, OnInit } from '@angular/core';
import { Book } from '../../models/book';
import { BookService } from '../../services/book.service';
@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
  providers: [BookService]
})

  // @Component({
  //   selector: 'app-command-bar',
  //   templateUrl: './command-bar.component.html',
  //   styleUrls: ['./command-bar.component.scss'],
  //   providers: [CommandBarComponent]
  // })
export class BookListComponent implements OnInit {

  arrayOfBooks?:Book[] = [];

  constructor(private myBookServices:BookService) { }

  ngOnInit(): void {
    this.arrayOfBooks = this.myBookServices.showBooks();
  }
  editBook(id:number){
    alert(`Edit: ${id}`);
    console.log(`Edit: ${id}`);
  }

  deleteBook(id:number){
    alert(`Delete: ${id}`);
    console.log(`Delete: ${id}`);
  }
  addToBookList(){
    alert(`add book:`);

  }
  deleteAll(arrayofbooks:Book[]){
    alert(`Delete All?: : ${arrayofbooks}`);
  }
}

