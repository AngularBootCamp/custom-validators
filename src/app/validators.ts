import {FormControl, FormGroup, ValidationErrors } from '@angular/forms';

export function trivialValidator(control: FormControl): ValidationErrors {
  if (control.value === '12345') {
    return undefined;
  } else {
    return {
      trivial: true
    };
  }
}

export function fiveValidator(control: FormControl): ValidationErrors {
  if (control.value !== '5') {
    return {
      verifyFive: true
    };
  }
}

export function matchingPasswordValidator(group: FormGroup): ValidationErrors {
  let first = group.get('password');
  let second = group.get('confirmPassword');
  if (first.value !== second.value) {
    return {
      mismatched: true
    };
  }
}

export function matchingFieldValidator(firstKey: string, secondKey: string, errorName: string) {
  return function (group: FormGroup): ValidationErrors {
    let first = group.controls[firstKey];
    let second = group.controls[secondKey];
    if (first.value !== second.value) {
      return {
        [errorName]: true
      };
    }
  };
}
