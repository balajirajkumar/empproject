import { Component, OnInit, ViewContainerRef, TemplateRef } from '@angular/core';
import { EmpserviceService } from '../empservice.service';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../Model/Employee';
import { ModalDialogService, SimpleModalComponent } from 'ngx-modal-dialog';


@Component({
  selector: 'app-empdtls',
  templateUrl: './empdtls.component.html',
  styleUrls: ['./empdtls.component.css']
})
export class EmpdtlsComponent implements OnInit {
  empdetails;
  showdtls=true;

  viewRef: ViewContainerRef;


  constructor(private empser: EmpserviceService) {

  }

 

  ngOnInit() {

    this.empser.getAllEMployees().subscribe(
      (res) => {
        this.empdetails = res
      }
    )
  }
  viewdtls(employee: Employee) {
    console.log("inside the method");
    console.log(employee);
  
  }


  Editdtls(employee: Employee) {
  
    console.log("inside edit method" + employee.id);
    this.empser.EditEmployeeDetails(employee).subscribe(
      (res)=>
      {
        alert("res Details ");
      }
    );

  }
  Deletedtls(Emp_id: number) {
    console.log("emp to be deleted" + Emp_id);
    this.empser.deleteEmployee(Emp_id).subscribe(
      (res) => {
        alert(Emp_id + "deleted successfully");
      }
    )
  }
  submitEmployee(employee :Employee)
  {
    console.log(employee);
    this.empser.CreateNewEmployee(employee).subscribe(
      (res)=>
      {
        alert("New Employee is created");
      }
    )

  }
}
