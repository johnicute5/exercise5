import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogItemComponent } from './blog/components/blog-item/blog-item.component';
import { BookItemComponent } from './book/components/book-item/book-item.component';

const routes: Routes = [
  { path: "",
  redirectTo: "blog-item",
  pathMatch: "full"
},

{
  path: "blog-item",
  component: BlogItemComponent
},

{
  path: "book-item",
  component: BookItemComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
