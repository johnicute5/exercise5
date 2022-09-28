import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommandBarComponent } from './command-bar.component';
import { SharedRoutingModule } from '../../shared-routing.module';


@NgModule({
  declarations: [
    CommandBarComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  exports:[
    CommandBarComponent
  ]
})
export class CommandBarModule { }
