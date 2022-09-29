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
  title = "Blog Form";
  id:any;
  blogForm: FormGroup;
  ff: FormArray ;
  isAddMode: boolean | undefined;




  constructor(private fb: FormBuilder,
    private route: ActivatedRoute,
    private blogService: BlogService) {
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
    this.id = this.route.snapshot.params['id'];
    this.isAddMode = !this.id;
    this.blogForm.valueChanges.subscribe((data) => {
    });
    if (!this.isAddMode) {
      this.blogService.getById(this.id)
      .pipe(first())
      .subscribe((x: { [key: string]: any; }) => this.blogForm.patchValue(x));
        }
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

