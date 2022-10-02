import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root'
})

export class BookService {

  private arrayOfBooksUrl = 'http://localhost:3000/books';
  httpClient: any;
  constructor(private http:HttpClient) {


  }
  private handleError(error: any) {
    console.log(error);
    return throwError(error);
  }

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.arrayOfBooksUrl).pipe(
      tap(data => console.log(data)),
      catchError(this.handleError)
    );
  }



  // showBooks() {
  //   return this.arrayOfBooks;
  // }
  // getBook(id:number):Book|any{
  //   return this.arrayOfBooks.find(book =>book.id === id);

  // }
}
