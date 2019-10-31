import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Employee } from '../models/employee.model'
import { Department } from '../models/department.model';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EmployeeService } from '../employee/employee.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create-model-binding',
  templateUrl: './create-model-binding.component.html',
  styleUrls: ['./create-model-binding.component.css']
})

export class CreateModelBindingComponent implements OnInit {

  datepickerConfig: Partial<BsDatepickerConfig>;

  photopreview: boolean = false;

  @ViewChild('empForm', { static: false }) public CreateEmployeeFormReferenceVariable2: NgForm;

  constructor(private _empservice: EmployeeService, private _router: Router, private _route: ActivatedRoute) {
    this.datepickerConfig = Object.assign({},
      {
        minDate: new Date(2018, 0, 15),
        maxDate: new Date(2019, 0, 15),
        containerClass: 'theme-dark-blue',
        rangeInputFormat: "DD/MM/YYYY"
      }
    );
  }

  employee: Employee;

  title: string;

  ngOnInit() {

    this._route.paramMap.subscribe(parametermap => {
      const empid = +parametermap.get("id");
      this.getEmployee(empid);
    });
  }

 private getEmployee(id: number) {

    if (id == 0) {
      this.employee = {
        id: null,
        name: null,
        gender: null,
        contactPreference: null,
        email: '',
        phoneNumber: null,
        dateOfBirth: null, 
        department: '',
        department1: '-1',
        isActive: null,
        photoPath: null
      };
      this.CreateEmployeeFormReferenceVariable2.reset();
      this.title = "Create Employee";


    } else {

      this.title = "Edit Employee";
      this.employee = Object.assign({}, this._empservice.getEmployeeByID(id));
    }
  }

  lstdept: Department[] =
    [
      { id: "HD", name: "Help Desk" },
      { id: "IT", name: "IT" },
      { id: "Payroll", name: "Payroll" },
      { id: "FI", name: "Finance" },
      { id: "HR", name: "HR" },
      { id: "Admin", name: "Admin" }
    ];




  toggelPhotoPreview() {
    this.photopreview = !this.photopreview;
  }


  // saveEmployee(empModel: Employee): void {
  //   console.log(empModel);
  //   //console.log(eForm.value);
  // }

  saveEmployee(): void {

    const newemp = Object.assign({}, this.employee);
    this._empservice.saveemp(newemp);
    this.CreateEmployeeFormReferenceVariable2.reset();
    this._router.navigate(['lstEmployees']);
  }


}
