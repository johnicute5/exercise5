import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookListComponent } from './pages/book-list/book-list.component';
import { BookItemComponent } from './components/book-item/book-item.component';
import { CommandBarComponent } from '../shared/components/command-bar/command-bar.component';
import { CommandBarModule } from '../shared/components/command-bar/command-bar.module';

@NgModule({
  declarations: [
    BookListComponent,
    BookItemComponent,
  ],
  imports: [
    CommonModule,
   CommandBarModule
  ],

})

export class BookModule { }
