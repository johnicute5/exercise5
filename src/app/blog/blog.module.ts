import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CommandBarComponent } from '../shared/components/command-bar/command-bar.component';
import { CommandBarModule } from '../shared/components/command-bar/command-bar.module';
import { BlogItemComponent } from './components/blog-item/blog-item.component';
import { BlogListComponent } from './pages/blog-list/blog-list.component';



@NgModule({
  declarations: [
    BlogListComponent,
    BlogItemComponent,

  ],
  imports: [
    CommonModule,
    CommandBarModule

  ]
})
export class BlogModule { }
