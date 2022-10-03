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
  bookForm: FormGroup<any>;
  ff: FormArray;
  title = "Add Book Form"

  bookID: string | null | any;
  sub:Subscription| undefined;

  constructor(private bookService:BookService ,
    fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute) {
    this.bookID = this.route.snapshot.paramMap.get('id');

    this.bookForm = fb.group({
      name: ['', [Validators.required]],
      author: fb.array(['']) ,
      isbn: ['', [Validators.required]],
    });
    this.ff = this.bookForm.get('author') as FormArray;
  }
  ngOnInit(): void {
    this.sub?.unsubscribe();
  }

  submitBook() : void{
    alert("Book succesfuly saved!");
    console.log(this.bookForm.value)
    this.bookService.addBooks(this.bookForm.value)
     window.location.href = "/book";
  }
  editBooks(): void{
    alert("Book succesfuly updated!");
    this.bookService.updateBooks(this.bookForm.value)
  }

  reset() {
    this.bookForm.reset();
  }

  addAuthor() {
    (this.bookForm.get('author') as FormArray).push(new FormControl());
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
