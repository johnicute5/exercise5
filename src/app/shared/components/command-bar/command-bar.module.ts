import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommandBarRoutingModule } from './command-bar-routing.module';
import { CommandBarComponent } from './command-bar.component';


@NgModule({
  declarations: [
    CommandBarComponent
  ],
  imports: [
    CommonModule,
    CommandBarRoutingModule
  ],
  exports:[
    CommandBarComponent
  ]
})
export class CommandBarModule { }
