import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { Blog } from '../models/blog';

@Injectable({
  providedIn: 'root'
})
export class BlogService {


  private ArrayOfBlogsUrl= 'http://localhost:3000/blogs';
  httpClient: any;
  constructor(private http:HttpClient) {


  }
  private handleError(error: any) {
    console.log(error);
    return throwError(error);
  }

  getBlogs(): Observable<Blog[]> {
    return this.http.get<Blog[]>(this.ArrayOfBlogsUrl).pipe(
      tap(data => console.log(data)),
      catchError(this.handleError)
    );
  }
  public getPostById() {
    let id: number = 1;
    let endPoints = "/posts/" + id;
    this.httpClient.get(this.ArrayOfBlogsUrl + endPoints).subscribe((data: any) => {
      console.log(data);
    });
  }
  public addPost(postData: Object) {
    let endPoints = "/posts"
    this.httpClient.post(this.ArrayOfBlogsUrl + endPoints, postData).subscribe((data: any) => {
      console.log(data);
    });
  }
  public updatePost(postData: Object) {
    let endPoints = "/posts/1"
    this.httpClient.put(this.ArrayOfBlogsUrl + endPoints, postData).subscribe((data: any) => {
      console.log(data);
    });
  }
  public deletePost() {
    let endPoints = "/posts/1"
    this.httpClient.delete(this.ArrayOfBlogsUrl+ endPoints).subscribe((data: any) => {
      console.log(data);
    });
  }

}
