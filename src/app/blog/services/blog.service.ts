import { Injectable } from '@angular/core';
import { Blog } from '../models/blog';

@Injectable({
  providedIn: 'root'
})
export class BlogService {


  ArrayOfBlogs:Blog[] = [
    {
      id: 101691,
      title: "Why X People Do X",
      description: " The x serves as a catch-all device, telling your reader that all is well in your relationship.",
      author: "Author X",
      comments: ["Comment X1", "Comment X2", "Comment X3"]
    },

    {
      id: 101692,
      title: "Experience Has Taught Me Well",
      description: "Everything you experience can be used to grow something fruitful in the future if you put it in the right bin.",
      author: "Master of Experiences",
      comments: ["Comment E1", "Comment E2", "Comment E3"]
    },

    {
      id: 101693,
      title: "What We Do When...",
      description: "what we do when the sky is falling down",
      author: "Sky Sumalangit",
      comments: ["Comment EARTH", "Comment FIRE", "Comment AIR","Comment WATER"]
    }
  ];

  constructor() { }

  showBlogs(){
    return this.ArrayOfBlogs;
  }
  getById(id:any){
    return id;
  }
  update(id:any,myblogs:Blog){
    return id && myblogs;

  }
}
