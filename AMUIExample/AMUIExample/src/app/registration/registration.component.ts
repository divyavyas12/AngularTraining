import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { User } from '../model/user';

interface Skills {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent implements OnInit {
  user: User = new User();

  hide = true;

  registrationform!: FormGroup;

  constructor(private fb: FormBuilder) {}

  emailpattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
  namepattern = /^[a-zA-Z ]{6,32}$/;
  usernamepattern = /^[a-z][a-z0-9]{5,20}$/;
  mobilepattern = /[0-9\+\-\ ]/;

  skills: Skills[] = [

    {value: 'Basic-0', viewValue: 'Angular Basic'},

    {value: 'Intermediate-1', viewValue: 'Angular Intermediate'},

    {value: 'Advanced-2', viewValue: 'Angular Advanced'},

  ];

  ngOnInit(): void {
    this.registrationform = this.fb.group({
      name: ['', [Validators.required, Validators.pattern(this.namepattern)]],

      emailId: ['', [Validators.required, Validators.pattern(this.emailpattern)]],

      userName: ['', [Validators.required, Validators.pattern(this.usernamepattern)]],

      password: ['', [Validators.required]],

      gender: ['', [Validators.required]],

      dob: ['', [Validators.required]],

      mobNo: ['', [Validators.required, Validators.pattern(this.mobilepattern)]],

      skills: ['', [Validators.required]],
    });
  }

  onSubmit(user:User){
    
  }

  onReset(){

    this.registrationform.reset();

  }

}
