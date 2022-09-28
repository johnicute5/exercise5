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
  selector: 'app-blog-form',
  templateUrl: './blog-form.component.html',
  styleUrls: ['./blog-form.component.scss'],

})
export class BlogFormComponent implements OnInit {
  title = "Blog"
  blogForm: FormGroup
  ff: FormArray

  constructor(fb: FormBuilder) {
    this.blogForm = fb.group({
      name: ['', [Validators.minLength(1), Validators.maxLength(7)]],
      addNewAuthor: fb.array([]),
      isbn: [''],
    });
    this.ff = this.blogForm.get('addNewAuthor') as FormArray;
  }
  ngAfterViewInit(): void {}
  ngOnInit(): void {
    this.blogForm.valueChanges.subscribe((data) => {
      console.log(data);
    });
  }
  submitBook() {
    console.log(this.blogForm.get('name')?.errors);
  }
  reset() {
    this.blogForm.reset();
  }
  markNickName() {
    this.blogForm.get('name')?.setValue('Ibong Adarna');
  }
  addAuthor() {
    (this.blogForm.get('addNewAuthor') as FormArray).push(
      new FormControl()
    );
  }
  deleteAuthor(id: number) {
    this.ff.removeAt(id);
  }
  get name() {
    return this.blogForm.get('name') as FormControl;
  }
  get isbn() {
    return this.blogForm.get('name') as FormControl;
  }
}

