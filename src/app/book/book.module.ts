import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooklistComponent } from './pages/booklist/booklist.component';
import { BookItemComponent } from './components/book-item/book-item.component';



@NgModule({
  declarations: [
    BooklistComponent,
    BookItemComponent
  ],
  imports: [
    CommonModule
  ]
})
export class BookModule { }
