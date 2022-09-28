import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormArray,
  FormControl,
  Validators,
  ReactiveFormsModule
} from '@angular/forms';


@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.scss'],

})
export class BookFormComponent implements OnInit {
  title = "books"
  bookForm: FormGroup
  ff: FormArray

  constructor(fb: FormBuilder) {
    this.bookForm = fb.group({
      name: ['', [Validators.minLength(1), Validators.maxLength(7)]],
      addNewAuthor: fb.array([]),
      isbn: [''],
    });
    this.ff = this.bookForm.get('addNewAuthor') as FormArray;
  }
  ngAfterViewInit(): void {}
  ngOnInit(): void {
    this.bookForm.valueChanges.subscribe((data) => {
      console.log(data);
    });
  }
  submitBook() {
    console.log(this.bookForm.get('name')?.errors);
  }
  reset() {
    this.bookForm.reset();
  }
  markNickName() {
    this.bookForm.get('name')?.setValue('Ibong Adarna');
  }
  addAuthor() {
    (this.bookForm.get('addNewAuthor') as FormArray).push(
      new FormControl()
    );
  }
  deleteAuthor(id: number) {
    this.ff.removeAt(id);
  }
  get name() {
    return this.bookForm.get('name') as FormControl;
  }
  get isbn() {
    return this.bookForm.get('name') as FormControl;
  }
}
