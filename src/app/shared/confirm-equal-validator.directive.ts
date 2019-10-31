import { Directive, Input } from '@angular/core';
import { Validator, AbstractControl, NG_VALIDATORS } from '@angular/forms';

@Directive({
  selector: '[appConfirmEqualValidator]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: ConfirmEqualValidatorDirective,
    multi: true
  }]
})
export class ConfirmEqualValidatorDirective implements Validator {

  constructor() { }

//  @Input() appConfirmEqualValidator: string;

  validate(controlgroup: AbstractControl): { [key: string]: any } | null {

    const controlToCompare = controlgroup.get('password');
    const controlToCompare2 = controlgroup.get('confirmPassword');

    if (controlToCompare && controlToCompare2 && controlToCompare.value !== controlToCompare2.value) {
      return { 'notEqual': true };
    } else {
      return null;
    }

  }

}
