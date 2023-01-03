import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-basic-info',
  templateUrl: './basic-info.component.html',
  styleUrls: ['./basic-info.component.css']
})
export class BasicInfoComponent {

  basicInfoForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  emailpattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
  namepattern = /^[a-zA-Z ]{6,32}$/;
  usernamepattern = /^[a-z][a-z0-9]{5,20}$/;
  mobilepattern = /[0-9\+\-\ ]/;
}
