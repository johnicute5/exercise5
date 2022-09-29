import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormArray,
  FormControl,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, NavigationEnd, Router, RouterEvent } from '@angular/router';
import { filter, Subscription } from 'rxjs';
import { Book } from 'src/app/book/models/book';
import { BookService } from 'src/app/book/services/book.service';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.scss'],
})
export class BookFormComponent implements OnInit {
  [x: string]: any;
  bookForm: FormGroup<any>;
  ff: FormArray;
  title = "Book Form"

  bookID: string | null | any;
  constructor(private bookService:BookService ,
    fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute) {
    this.bookID = this.route.snapshot.paramMap.get('id');
    let book = (this.bookService.getBook(Number(this.bookID)))
    this.bookForm = fb.group({
      name: [book?.name, [Validators.required]],
      addNewAuthor: fb.array([book?.author]) ,
      isbn: [book?.isbn, [Validators.required]],
    });
    this.ff = this.bookForm.get('addNewAuthor') as FormArray;
  }

  ngOnInit(): void {
  }

  submitBook() {
    alert("Book succesfuly saved!");
    console.log(this.bookForm.get('name')?.errors);
    console.log(this.bookForm.value);
    window.location.href = "/book";
  }

  reset() {
    this.bookForm.reset();
  }

  addAuthor() {
    (this.bookForm.get('addNewAuthor') as FormArray).push(new FormControl());
  }

  deleteAuthor(id: number) {
    this.ff.removeAt(id);
  }

  get name() {
    return this.bookForm.get('name') as FormControl;
  }

  get isbn() {
    return this.bookForm.get('isbn') as FormControl;
  }
}
