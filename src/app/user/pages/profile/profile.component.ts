import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { User } from '../../models/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  profile:FormGroup;

  constructor(fb: FormBuilder) {
    this.profile = fb.group({
      email: [''],
      name: [''],
      bio: [''],
      active: [false]
    }

    )
  }

  ngOnInit(): void {
  }

  submitProfile() {
    console.log(this.profile.value)
  }

}
