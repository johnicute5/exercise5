import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './pages/profile/profile.component';
import { FormComponent } from './components/form/form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { SharedModule } from '../shared/shared.module';
import { UserRoutingModule } from './user-routing.module';

@NgModule({
  declarations: [
    ProfileComponent,
    FormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    UserRoutingModule,
    MatSlideToggleModule,
    ReactiveFormsModule
  ],
  bootstrap: [ProfileComponent]
})
export class UserModule { }
