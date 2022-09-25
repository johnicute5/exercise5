import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  profile: User = {
      email: '',
      name: '',
      bio: '',
      active: ''
  }

  constructor() { }

  ngOnInit(): void {
  }

  submitProfile() {
    console.log(this.profile);
  }

}
