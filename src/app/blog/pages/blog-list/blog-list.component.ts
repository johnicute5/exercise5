import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Blog } from '../../models/blog';
import { BlogService } from '../../services/blog.service';
import { BookFormComponent } from 'src/app/modules/book/pages/book-form/book-form.component';


@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss'],
  providers: [BlogService]
})
export class BlogListComponent implements OnInit {
  myArrayofBlogs: Blog[] = [];
  blogs: Blog|any

  constructor(private myBlogService:BlogService) { }
    getBlogs(){
    this.myBlogService.getBlogs().subscribe(data => {
      this.myArrayofBlogs=data;
    });
  }
  ngOnInit(): void {
   this.getBlogs();
  }

}
