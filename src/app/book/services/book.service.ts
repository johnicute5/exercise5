import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, filter, Subject, ReplaySubject, BehaviorSubject, throwError } from 'rxjs'
import { environment } from 'src/environments/environment';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root'
})

export class BookService {
  subject = new Subject();
  replay = new ReplaySubject(10);
  behavior = new BehaviorSubject("Jerome");
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
<<<<<<< HEAD
=======

        }
        return data
      }
      )
    )
  }
>>>>>>> 89d39bc46d1180a74479c7f3f1fb2ba2da1ce8ba

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
    return this.http.delete(`${environment.url}/Books/${id}`).subscribe()
  }


  // showBooks() {
  //   return this.arrayOfBooks;
  // }
  // getBook(id:number):Book|any{
  //   return this.arrayOfBooks.find(book =>book.id === id);

  // }
}
