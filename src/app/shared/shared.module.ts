import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { CommandBarComponent } from './components/command-bar/command-bar.component';
import { AppRoutingModule } from '../app-routing.module';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [
    HeaderComponent,
    CommandBarComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule
  ],
  exports:[
    HeaderComponent,
    CommandBarComponent
  ]
})
export class SharedModule { }
