import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogListComponent } from './pages/blog-list/blog-list.component';
import { BlogItemComponent } from './components/blog-item/blog-item.component';
import { CommandBarComponent } from '../shared/components/command-bar/command-bar.component';
import { CommandBarModule } from '../shared/components/command-bar/command-bar.module';



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
