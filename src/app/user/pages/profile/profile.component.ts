import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class  ProfileComponent implements OnInit {
  profile:FormGroup<any>;
  title = "Profile Page";

  constructor(fb: FormBuilder) {
    this.profile = fb.group({
      email: ['',[Validators.required,Validators.email]],
      name: ['',[Validators.required,Validators.minLength(2)]],
      bio: ['',[Validators.required,Validators.minLength(20)]],
      active: [false]
    }

    )
  }
  ngOnInit(): void{

  }
  submitProfile() {
    console.log(this.profile.value)
  }

  get bio(){
    return this.profile.get('bio') as FormControl;
  }
  get name(){
    return this.profile.get('name') as FormControl;
  }


}
