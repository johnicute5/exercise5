import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
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

  constructor() { }

  ngOnInit(): void {
  }

  sendEditBlog(){
    this.editIdEmitter.emit(this.arrayOfBlogs?.id)
  }


  sendDeleteBlog(){
    this.deleteIdEmitter.emit(this.arrayOfBlogs?.id)
  }

}
