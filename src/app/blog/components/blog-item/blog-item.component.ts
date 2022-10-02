import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { Blog } from '../../models/blog';

@Component({
  selector: 'app-blog-item',
  templateUrl: './blog-item.component.html',
  styleUrls: ['./blog-item.component.scss']
})
export class BlogItemComponent implements OnInit {

  @Input() arrayOfBlogs: Blog|any;
  @Output() editIdEmitter = new EventEmitter<Blog>();
  @Output() deleteIdEmitter = new EventEmitter();

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  sendEditBlog(){
    alert(`do you want to edit: ${this.arrayOfBlogs?.id}?`);
    this.router.navigate([`blog/addform/${this.arrayOfBlogs?.id}`])
    this.editIdEmitter.emit(this.arrayOfBlogs?.id);
    console.log("Edit Blog: " + this.arrayOfBlogs?.id)
  }


  sendDeleteBlog(){
    alert(`do you want to delele this blog id: ${this.arrayOfBlogs?.id}?`);
    console.log("Delete Book: " + this.arrayOfBlogs?.id)
    this.deleteIdEmitter.emit(this.arrayOfBlogs?.id)
    this.router.navigate(['/blog'])
  }

}
