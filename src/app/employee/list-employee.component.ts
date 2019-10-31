import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee.model';
import { EmployeeService } from './employee.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css']
})
export class ListEmployeeComponent implements OnInit {

  empindex: number = 1;
  emptodisplay: Employee;
  employees: Employee[];
  ShowEmpName: string;
  showgender: string;
  private _searchTerm: string;

  filteredEmployees: Employee[];

  get searchTerm(): string {
    return this._searchTerm;
  }

  set searchTerm(value: string) {
    this._searchTerm = value;
    this.filteredEmployees = this.filterEmployees(value);
  }

  // Adding filtering Logic to Component
  filterEmployees(st: string): Employee[] {
    return this.employees.filter(e => e.name.toLowerCase().indexOf(st.toLowerCase()) !== -1);
  }

  constructor(public _empservice: EmployeeService, public _router: Router, private _route: ActivatedRoute) {
    this.employees = this._route.snapshot.data["employeelist"];
    if (this._route.snapshot.queryParamMap.has("searchTerm")) {
      this.searchTerm = this._route.snapshot.queryParamMap.get("searchTerm");
      this.filteredEmployees = this.filterEmployees(this.searchTerm);
    } else {
      this.filteredEmployees = this.employees;
    }
  }

  ngOnInit() {

    // This Block is commented because we are executing code in consturctor. Only when whole data is ready only then page will get displayed.
    // this._empservice.getEmployees().subscribe((el) => {
    //   this.employees = el;
    //   // This Below block should be in subscribe method otherwise when we will retreive data from db then there will be delay and below code will execute first before assigning value to employeelist and it will generate error.
    //   if (this._route.snapshot.queryParamMap.has("searchTerm")) {
    //     this.searchTerm = this._route.snapshot.queryParamMap.get("searchTerm");
    //     this.filteredEmployees = this.filterEmployees(this.searchTerm);
    //   } else {
    //     this.filteredEmployees = this.employees;
    //   }
    //});

    // //this.emptodisplay = this.employees[0];
  }
  ChangeName() {
    this.employees[0].name = "jordon";
    this.filteredEmployees = this.filterEmployees(this.searchTerm);


    // -----------------------------------------------------------
    // const newEmpArray: Employee[]= Object.assign([],this.employees);
    // newEmpArray[0].name="jordon";
    // this.employees=newEmpArray; 
    //This is pure change so on search with letter "J"
    // it will first display only john then click on change name then list will show jordon too. This is pure pipe exeution example.
  }
  nextEmployee(): void {
    if (this.empindex <= 2) {
      this.emptodisplay = this.employees[this.empindex];
      this.empindex++;
    } else {
      this.emptodisplay = this.employees[0];
      this.empindex = 1;
    }
  }


  //Displaying Data from Child Component

  handleNotify(eventData: Employee) {
    this.ShowEmpName = eventData.name;
    this.showgender = eventData.gender;
  }

  handleNotifyDelete(id: number) {
    const idx = this.filteredEmployees.findIndex(e => e.id === id);
    if (idx != -1) {
      this.filteredEmployees.splice(idx, 1);
    }
  }

  // onClick(empid: number) { //,name:string
  //   this._router.navigate(['/employee', empid], {
  //     queryParams: {
  //       "searchTerm": this.searchTerm,
  //       "TestParam": "testvalue"
  //     }
  //   }); //,name
  // }

}
