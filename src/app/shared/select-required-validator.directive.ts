import { Directive, Input } from '@angular/core';
import { Validator, AbstractControl, NG_VALIDATORS } from '@angular/forms';

@Directive({
  selector: '[appSelectRequiredValidator]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: SelectRequiredValidatorDirective,
    multi: true
  }]
})


// Code in Providers is to register our custom validator in NG_validator which also contains angular Built-in validators
export class SelectRequiredValidatorDirective implements Validator {

  constructor() { }

  @Input() appSelectRequiredValidator: string;

  validate(control: AbstractControl): { [key: string]: any } | null {
    return control.value === this.appSelectRequiredValidator ? { 'defaultSelected': true } : null;
    // Key to determine in validator list and true is when it fails validation, null is when validation succeeded.
    //contol.value==="-1" is the hardcoded value of default selection. So to make it reusable we will use the appselectrequiredvalidator's value

  }

}
