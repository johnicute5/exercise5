import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommandBarComponent } from './command-bar.component';



@NgModule({
  declarations: [
    CommandBarComponent
  ],
  imports: [
    CommonModule,

  ],
  exports:  [
    CommandBarComponent

  ]
})
export class CommandBarModule { }
