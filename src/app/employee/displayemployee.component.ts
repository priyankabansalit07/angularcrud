import { Component, OnInit, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { Employee } from '../models/employee.model';
import { ActivatedRoute, Router } from '@angular/router';
import { initHour } from 'ngx-bootstrap/chronos/units/hour';
import { EmployeeService } from './employee.service';


@Component({
  selector: 'app-displayemployee',
  templateUrl: './displayemployee.component.html',
  styleUrls: ['./displayemployee.component.css']
})
export class DisplayemployeeComponent implements OnInit {


  private selectedEmployeeId: number;
  confirmdelete=false;


  constructor(private _route: ActivatedRoute, private _router: Router, private _empservice: EmployeeService) { }

  ngOnInit() {
    this.selectedEmployeeId = + this._route.snapshot.paramMap.get("id");
  }

  //Using ngOnchanges approach 
  @Input() emp: Employee;



  ngOnChanges(changes: SimpleChanges) {
    ////console.log(changes); // returns the full object
    // const prevEmployee = <Employee>changes.emp.previousValue;
    // const currentEmployee = <Employee>changes.emp.currentValue;
    // console.log('Previous: ' + (prevEmployee ? prevEmployee.name : 'Null'));
    // console.log('Current: ' + currentEmployee.name);
  }

  // ----OR(Both Above and Below code does the same thing)-----

  //Property Setter Approach
  // private _employee: Employee;

  // @Input()
  // set emp(val: Employee) {
  //   console.log("Previous: " +( this._employee ? this._employee.name : "Null"));
  //   console.log("Current: " + val.name);
  //   this._employee = val;
  // }

  // get emp(): Employee {
  //   return this._employee;
  // }


  // -- Below code is to transfer data from child Component to Parent Component. Child Component uses eventEmitter to transfer the data.

  // @Output() notify: EventEmitter<string> = new EventEmitter<string>(); // To display Name

  @Output() notify: EventEmitter<Employee> = new EventEmitter<Employee>();

  handleClick() {

    //this.notify.emit(this.emp.name);  //This notify will emit eventdata or event payload

    this.notify.emit(this.emp);

    // console.log("heloo");
  }

  @Input() searchTerm: string;
  onClick(empid: number) {
    this._router.navigate(['/employee', this.emp.id], {
      queryParams: {
        "searchTerm": this.searchTerm
      }
    }
    );
  }

  editEmployee() {
    this._router.navigate(['/edit', this.emp.id]);


  }
@Output() notifyDelete: EventEmitter<number>=new  EventEmitter();
  deleteEmployee() {
    this._empservice.deleteEmployee(this.emp.id);
    this.notifyDelete.emit(this.emp.id);
  }

}
