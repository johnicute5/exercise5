import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookRoutingModule } from './book-routing.module';
import { BookListComponent } from './pages/book-list/book-list.component';
import { BookItemComponent } from './components/book-item/book-item.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import { BookFormComponent } from '../modules/book/pages/book-form/book-form.component';


@NgModule({
  declarations: [
    BookListComponent,
    BookItemComponent,
    BookFormComponent
  ],
  imports: [
    CommonModule,
    BookRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MatIconModule,
    SharedModule
  ]
})
export class BookModule { }
