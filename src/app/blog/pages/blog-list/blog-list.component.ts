import { Component, OnInit } from '@angular/core';
import { Blog } from '../../models/blog';
import { BlogService } from '../../services/blog.service';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss'],
  providers: [BlogService]
})
export class BlogListComponent implements OnInit {

  myArrayofBlogs?: Blog[] = [];

  constructor(private myBlogService:BlogService) { }

  ngOnInit(): void {
    this.myArrayofBlogs = this.myBlogService.showBlogs();
  }

  editBlog(id:number){
    alert(`Edit: ${id}`);
  }

  deleteBlog(id:number){
    alert(`Delete: ${id}`);
  }


}
