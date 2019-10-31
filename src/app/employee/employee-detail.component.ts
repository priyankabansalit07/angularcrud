import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from './employee.service';
import { Employee } from '../models/employee.model';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {

  emp: Employee;
  private _id: number
  constructor(private _route: ActivatedRoute, private _empservice: EmployeeService, private _router: Router) { }

  ngOnInit() {
    //Angular 2
    // this._id = +this._route.snapshot.params["id"]; // Here + sign is to convert string to number.

    //Angular 4 or above
    //Method 1- using Snapshot (only works when we get to emp by list and then back to list and click on 2nd employee, But will not work if we want to move to next emp from one employee)
    // this._id=+this._route.snapshot.paramMap.get("id");

    this._route.paramMap.subscribe(params => {
      this._id = +params.get('id');
      this.emp = this._empservice.getEmployeeByID(this._id);
    });
  }

  ViewNextEmployee() {
    //console.log(this._id);
    if (this._id >= 3) {
      this._id = 1;
    } else {
      this._id = this._id + 1;
    }

    this._router.navigate(["/employee", this._id],
      { queryParamsHandling: "preserve" });
  }


}
