import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Employee } from '../models/employee.model';
import { Observable } from 'rxjs';
import { EmployeeService } from './employee.service';

@Injectable({
  providedIn: 'root'
})
export class EmployeeListResolverService implements Resolve<Employee[]> {

  constructor(private _empservice: EmployeeService) { }

  resolve (route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Employee[]> {
    return this._empservice.getEmployees();
  }

}
