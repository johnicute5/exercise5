import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommandBarModule } from './components/command-bar/command-bar.module';
import { HeaderComponent } from './components/header/header.component';



@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommandBarModule,
    CommonModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
