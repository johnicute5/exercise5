import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BookFormComponent } from '../modules/book/pages/book-form/book-form.component';
import { CommandBarComponent } from '../shared/components/command-bar/command-bar.component';
import { CommandBarModule } from '../shared/components/command-bar/command-bar.module';
import { BookRoutingModule } from './book-routing.module';
import { BookItemComponent } from './components/book-item/book-item.component';
import { BookListComponent } from './pages/book-list/book-list.component';

@NgModule({
  declarations: [
    BookListComponent,
    BookItemComponent,
    BookFormComponent,

  ],
  imports: [
    CommonModule,
    CommandBarModule,
    BookRoutingModule,
    ReactiveFormsModule
  ],

})

export class BookModule { }
