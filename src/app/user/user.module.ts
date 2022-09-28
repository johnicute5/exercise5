import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './pages/profile/profile.component';
import { FormComponent } from './components/form/form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';

@NgModule({
  declarations: [
    ProfileComponent,
    FormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatSlideToggleModule,
    ReactiveFormsModule
  ],
  bootstrap: [ProfileComponent]
})
export class UserModule { }
