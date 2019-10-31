import { Injectable } from '@angular/core';
import { Employee } from '../models/employee.model';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})

export class EmployeeService {

  private listEmp: Employee[] = [
    {
      id: 1,
      name: 'Mark',
      gender: 'Male',
      contactPreference: 'Email',
      email: 'mark@pragimtech.com',
      dateOfBirth: new Date('10/25/1988'),
      department: 'IT',
      isActive: true,
      photoPath: 'assets/images/mark.png'
    },
    {
      id: 2,
      name: 'Mary',
      gender: 'Female',
      contactPreference: 'Phone',
      phoneNumber: 2345978640,
      dateOfBirth: new Date('11/20/1979'),
      department: 'HR',
      isActive: true,
      photoPath: 'assets/images/mary.png'
    },
    {
      id: 3,
      name: 'John',
      gender: 'Male',
      contactPreference: 'Phone',
      phoneNumber: 5432978640,
      dateOfBirth: new Date('3/25/1976'),
      department: 'IT',
      isActive: false,
      photoPath: 'assets/images/john.png'
    },
  ];

  getEmployees(): Observable<Employee[]> {
    return of(this.listEmp).pipe(delay(1000)); // In Old version you need to Observable.of
  }

  getEmployeeByID(id: number): Employee {
    return this.listEmp.find(e => e.id === id);
  }
  constructor() { }

  saveemp(employee: Employee) {

    if (employee.id === null) {

      const maxid = this.listEmp.reduce(function (e1, e2) {
        return (e1 > e2) ? e1 : e2;
      }).id;

      employee.id = maxid + 1;
      this.listEmp.push(employee);
    } else {
      const foundIndex = this.listEmp.findIndex(e => e.id === employee.id);
      this.listEmp[foundIndex] = employee;
    }

  }

  deleteEmployee(id: number) {
    const index = this.listEmp.findIndex(e => e.id === id);
    if (index != -1) {
      this.listEmp.splice(index, 1);
    }
  }
}
