import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormArray,
  FormControl,
  Validators,
  ReactiveFormsModule
} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';
import { BlogService } from 'src/app/blog/services/blog.service';



@Component({
  selector: 'app-blog-form',
  templateUrl: './blog-form.component.html',
  styleUrls: ['./blog-form.component.scss'],

})
export class BlogFormComponent implements OnInit {
  Title = "Blog Form";
  blogForm: FormGroup;
  ff: FormArray ;


  blogID: string | null | any;
  constructor(private blogService:BlogService ,
    fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute) {
    this.blogID = this.route.snapshot.paramMap.get('id');
    let blog = (this.blogService.getBlog(Number(this.blogID)))

    this.blogForm = fb.group({
      title: [blog?.title, [Validators.required]],
      description: [blog?.description, [Validators.required]],
      author: [blog?.author, [Validators.required]],
      addNewComment: fb.array([blog?.comments]) ,
    });
    this.ff = this.blogForm.get('addNewComment') as FormArray;
  }
  ngOnInit(): void {
  }

  submitBlog() {
    alert(`Blog Succesfuly Save!`);
    console.log(this.blogForm.get('title')?.errors);
    console.log(this.blogForm.value)
    this.reset();

  }
  reset() {
    this.blogForm.reset();
  }
  addComment() {
    (this.blogForm.get('addNewComment') as FormArray).push(
      new FormControl()
    );
  }
  deleteComment(id: number) {
    this.ff.removeAt(id);
  }
  get title() {
    return this.blogForm.get('title') as FormControl;
  }
  get description() {
    return this.blogForm.get('description') as FormControl;
  }
  get author() {
    return this.blogForm.get('author') as FormControl;
  }
}

