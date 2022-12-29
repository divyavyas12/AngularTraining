import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable, Subject } from 'rxjs';
import { compileDeclareInjectableFromMetadata } from '@angular/compiler';
import { employee } from '../Model/employee';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  constructor(private http : HttpClient) { }
  url:string="http://localhost:5111/api/Employees";
  e:employee= new employee();
  private editcallback = new Subject<employee>();
  editcallback$= this.editcallback.asObservable();
  getAllData(): Observable<any> 
  {
    return this.http.get(`${this.url}`)
  }

  getData(empNo:number): Observable<any>
  {
    return this.http.get<any>(`${this.url}/${empNo}`)
  }

  postData(data: any): Observable<any> 
  {
    return this.http.post(`${this.url}`, data)
  }

  updateData(data: any): Observable<any> 
  {
    return this.http.put(`${this.url}/${data.empNo}`, data)
  }

  deleteData(empNo: number): Observable<any>{
      return this.http.delete<any>(`${this.url}/${empNo}`)
  }

  onClickEdit(emp:employee){
     this.editcallback.next(emp);
  }

}
