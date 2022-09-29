import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookFormComponent } from '../modules/book/pages/book-form/book-form.component';
import { BookListComponent } from './pages/book-list/book-list.component';

const routes: Routes = [
  {
    path: 'book',
    component: BookListComponent
  },
  {
    path: 'book/addform',
    component: BookFormComponent
  },
  {
    path: `book/addform/10101`,
    component: BookFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookRoutingModule { }
