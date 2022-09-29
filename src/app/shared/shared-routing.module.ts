import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogFormComponent } from 'src/app/modules/blog/pages/blog-form/blog-form.component';
import { BookFormComponent } from 'src/app/modules/book/pages/book-form/book-form.component';

const routes: Routes = [
  { path: 'blogs', component: BlogFormComponent },
  { path: 'books', component: BookFormComponent }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharedRoutingModule { }
