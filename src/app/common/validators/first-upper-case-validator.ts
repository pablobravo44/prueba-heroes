import { AbstractControl, ValidatorFn } from '@angular/forms';

export function firstLetterUppercaseValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const value = control.value;
    if (value && value[0] !== value[0].toUpperCase()) {
      return { 'firstLetterUppercase': { value: control.value } };
    }
    return null;
  };
}