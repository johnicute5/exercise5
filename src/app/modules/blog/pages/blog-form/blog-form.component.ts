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
  title = "Add Blog Form"
  blogForm: FormGroup
  ff: FormArray

  constructor(fb: FormBuilder) {
    this.blogForm = fb.group({
      title: ['', [Validators.minLength(2)]],
      description: ['',[Validators.minLength(20)]],
      author:['',[Validators.minLength(2)]],
      addNewComment: fb.array([]),

    });
    this.ff = this.blogForm.get('addNewComment') as FormArray;
  }
  ngAfterViewInit(): void {}
  ngOnInit(): void {
    this.blogForm.valueChanges.subscribe((data) => {

    });
  }
  submitBlog() {
    alert(`Blog Succesfuly Save!`);
    console.log(this.blogForm.get('title')?.errors);
    console.log(this.blogForm.value)

  }
  reset() {
    this.blogForm.reset();
  }
  markNickName() {
    this.blogForm.get('title')?.setValue('Blogger Tips 101');
  }
  addComment() {
    (this.blogForm.get('addNewComment') as FormArray).push(
      new FormControl()
    );
  }
  deleteComment(id: number) {
    this.ff.removeAt(id);
  }
  get titles() {
    return this.blogForm.get('title') as FormControl;
  }
  get description() {
    return this.blogForm.get('description') as FormControl;
  }
  get author() {
    return this.blogForm.get('author') as FormControl;
  }
}

