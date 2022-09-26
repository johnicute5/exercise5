import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommandBarComponent } from './command-bar.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CommandBarComponent
  ],
  exports:  [
    CommandBarComponent
  ]
})
export class CommandBarModule { }
