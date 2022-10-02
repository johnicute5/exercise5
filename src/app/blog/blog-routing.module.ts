import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogFormComponent } from '../modules/blog/pages/blog-form/blog-form.component';

import { BlogListComponent } from './pages/blog-list/blog-list.component';

const routes: Routes = [
  {
    path: 'blog',
    component: BlogListComponent
  },
  {
    path: 'blog/addform',
    component: BlogFormComponent
  },
  {
    path: 'blog/addform/:$id',
    component: BlogFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
