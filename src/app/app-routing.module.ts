import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BlogListComponent } from './blog/pages/blog-list/blog-list.component';
import { BookListComponent } from './book/pages/book-list/book-list.component';
import { ProfileComponent } from './user/pages/profile/profile.component';

const routes: Routes = [

  {
    path: 'book',
    component: BookListComponent,
    loadChildren: () => import('./book/book.module').then(m =>m.BookModule)
  },

  {
    path: 'blog',
    component: BlogListComponent,
    loadChildren: () => import('./blog/blog.module').then(m =>m.BlogModule)
  },

  {
    path: 'profile',
    component: ProfileComponent,
    loadChildren: () => import('./user/user.module').then(m =>m.UserModule)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
