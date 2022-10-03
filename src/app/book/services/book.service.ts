import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, filter, Subject, ReplaySubject, BehaviorSubject, throwError, catchError } from 'rxjs'
import { environment } from 'src/environments/environment';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root'
})

export class BookService {
  subject = new Subject();
  replay = new ReplaySubject(10);
  behavior = new BehaviorSubject("Jerome");
  apiURL = 'http://localhost:3000';
  constructor(private http:HttpClient) {}
  private handleError(error: any) {
    console.log(error);
    return throwError(error);
  }
//Get Book Api
  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(`${environment.url}/books`).pipe<Book[]>(
      map((data: Book[]) => {
        for(let a of data) {

        }
        return data
      }
      )
    )
  }
  addBooks(books:Book){
    return this.http.post(`${environment.url}/books`, books).subscribe()

  }
  updateBooks(books:Book) {
    return this.http.put(`${environment.url}/books/${books.id}`, books).subscribe()
  }
  deleteBooks(id:number) {
    return this.http.delete(`${environment.url}/books/${id}`).subscribe()
  }


  find(id: number): Observable<Book> {
    return this.http.get<Book>(this.apiURL + `/books/${id}`)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  errorHandler(error: { error: { message: string; }; status: any; message: any; }) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
 }
}

  // showBooks() {
  //   return this.arrayOfBooks;
  // }
  // getBook(id:number):Book|any{
  //   return this.arrayOfBooks.find(book =>book.id === id);

  // }
