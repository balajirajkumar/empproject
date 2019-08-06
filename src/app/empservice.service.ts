import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from './Model/Employee';

@Injectable({
  providedIn: 'root'
})
export class EmpserviceService {
  geturl = "http://localhost:3000/employees";
  http: any;
  
  constructor(private httpRef: HttpClient) {

  }
  getAllEMployees() {
    return this.httpRef.get(this.geturl);

  }

  deleteEmployee(id :number):Observable<any> 
  {
    console.log("inside the service method"+id);
    return this.httpRef.delete('http://localhost:3000/employees/'+id);
  }
  CreateNewEmployee(employee :Employee)
  {
      return this.httpRef.post('http://localhost:3000/employees',employee);      
  }
  EditEmployeeDetails(employee :Employee)
  {
    console.log("inside the service method"+employee.first_name);
    return this.httpRef.get('http://localhost:3000/employees/'+employee.id);
  }
}
