import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, tap, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Blog } from '../models/blog';

@Injectable({
  providedIn: 'root'
})
export class BlogService {



  httpClient: any;
  constructor(private http:HttpClient) {


  }
  private handleError(error: any) {
    console.log(error);
    return throwError(error);
  }

  getBlogs(): Observable<Blog[]> {
    return this.http.get<Blog[]>(`${environment.url}/blogs`).pipe<Blog[]>(
      map((data: Blog[]) => {
        for(let a of data) {

        }
        return data
      }
      )
    )
  }


}
