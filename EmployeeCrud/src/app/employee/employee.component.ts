import { Component } from '@angular/core';
import { employee } from '../Model/employee';
import {FormBuilder,FormGroup, Validators } from '@angular/forms';
import { ServiceService } from '../Services/service.service';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {

  constructor(private fb:FormBuilder,public service:ServiceService){ }
  obj:employee = new employee();

  employeeform!:FormGroup;
  // this.service.updateUser(this.user).subscribe(data1 => {
  //   this.getUsers();         
 // emailpattern!:"^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  namepattern!:"^[a-zA-Z ]{2,20}$";

  ngOnInit()
  {
    this.employeeform=this.fb.group
    ({
      empNo:['',[Validators.required]],
      name:['',[Validators.required,Validators.pattern(this.namepattern)]],
      basic:['',[Validators.required]],
      deptNo:['',[Validators.required]],
    })
  }

  onSubmit(emp:employee)
  {
    console.log(emp);
  this.service.postData(emp)
    .subscribe(response => {
        console.log(response);
        window.location.reload();
  })
  }
  onReset()
  {
      this.obj.empNo=0;
      this.obj.name='';
      this.obj.basic=0;
      this.obj.deptNo=0;
      
  }
}
