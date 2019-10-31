import { Injectable } from '@angular/core';
import { CreateModelBindingComponent } from './create-model-binding.component';
import { CanDeactivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CreateEmployeeCanDeactivate2Service implements CanDeactivate<CreateModelBindingComponent> {

  constructor() { }

  canDeactivate(component: CreateModelBindingComponent): boolean {
    if(component.CreateEmployeeFormReferenceVariable2.dirty){
      return confirm("Are you sure you want to discard your changes?");
      // return false;
    }else{
      return true;
    }
  }
}
