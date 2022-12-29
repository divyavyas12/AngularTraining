import { Component } from '@angular/core';
import {employee} from '../Model/employee';
import { ServiceService } from '../Services/service.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent {
  employeeList: employee[] = [];
   constructor(private service:ServiceService){ }
   
   ngOnInit():void
   {
    this.service.getAllData().subscribe((data:employee[]) => {
      this.employeeList = data;
    })
   }

   onUpdate(emp:employee)
   {
      this.service.onClickEdit(emp);

   }
   onDelete(empId:number)
   {
      this.service.deleteData(empId).subscribe();
      window.location.reload();
   }


}
