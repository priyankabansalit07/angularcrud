import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { CreateEmployeeComponent } from './create-employee.component';

@Injectable({
  providedIn: 'root'
})
export class CreateEmployeeCanDeactivateService implements CanDeactivate<CreateEmployeeComponent> {

  constructor() { }

  canDeactivate(component: CreateEmployeeComponent): boolean {
    if(component.CreateEmployeeFormReferenceVariable.dirty){
      return confirm("Are you sure you want to discard your changes?");
      // return false;
    }else{
      return true;
    }
  }
}
