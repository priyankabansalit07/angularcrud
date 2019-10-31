import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { EmployeeService } from './employee.service';

@Injectable({
  providedIn: 'root'
})

export class EmployeeDetailsGuardService implements CanActivate {

  constructor(private _router: Router, private _empservice: EmployeeService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

    const empexists = !!this._empservice.getEmployeeByID(+route.paramMap.get("id"));

    if (empexists) {
      return true;
    } else {
      this._router.navigate(["**"]);
    }

  }
}
