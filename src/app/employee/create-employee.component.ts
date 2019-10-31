import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Department } from '../models/department.model';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Router } from '@angular/router';


@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  @ViewChild('empForm', { static: false }) public CreateEmployeeFormReferenceVariable: NgForm;

  datepickerConfig: Partial<BsDatepickerConfig>;

  photopreview: boolean = false;

  constructor(private _router: Router) {
    this.datepickerConfig = Object.assign({},
      {
        minDate: new Date(2018, 0, 15),
        maxDate: new Date(2019, 0, 15),
        containerClass: 'theme-dark-blue',
        rangeInputFormat: "DD/MM/YYYY"
      }
    );
  }


  lstdept: Department[] = [
    { id: "HD", name: "Help Desk" },
    { id: "IT", name: "IT" },
    { id: "Payroll", name: "Payroll" },
    { id: "FI", name: "Finance" },
    { id: "HR", name: "HR" },
    { id: "Admin", name: "Admin" }];


  ngOnInit() {


  }
  // gender="female"; to get checked radio button by default



  toggelPhotoPreview() {
    this.photopreview = !this.photopreview;
  }


  saveEmployee(eForm: NgForm): void {
   
    console.log(eForm);
    console.log(eForm.value);

    // To Reset Form

    eForm.reset({
      fullname : "test name",
      contactPreference:"phone"
    });
    // -- Or --
    // this.CreateEmployeeFormReferenceVariable.reset();

    //this._router.navigate(["lstEmployees"]);


  }


}
