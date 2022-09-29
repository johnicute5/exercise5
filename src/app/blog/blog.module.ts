import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { BlogListComponent } from './pages/blog-list/blog-list.component';
import { BlogItemComponent } from './components/blog-item/blog-item.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import { BlogFormComponent } from '../modules/blog/pages/blog-form/blog-form.component';

@NgModule({
  declarations: [
    BlogListComponent,
    BlogItemComponent,
    BlogFormComponent
  ],
  imports: [
    CommonModule,
    BlogRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule
  ]
})
export class BlogModule { }
