import {
  FormControl,
  FormGroup,
  ValidationErrors
} from '@angular/forms';

export function trivialValidator(
  control: FormControl
): ValidationErrors | undefined {
  if (control.value === '12345') {
    return undefined;
  } else {
    return {
      trivial: true
    };
  }
}

export function fiveValidator(
  control: FormControl
): ValidationErrors | undefined {
  if (control.value !== '5') {
    return {
      verifyFive: true
    };
  }
}

export function matchingPasswordValidator(
  group: FormGroup
): ValidationErrors | undefined {
  const first = group.get('password');
  const second = group.get('confirmPassword');
  if (first && second && first.value !== second.value) {
    return {
      mismatched: true
    };
  }
}

export function matchingFieldValidator(
  firstKey: string,
  secondKey: string,
  errorName: string
) {
  return (group: FormGroup): ValidationErrors | undefined => {
    const first = group.controls[firstKey];
    const second = group.controls[secondKey];
    if (first && second && first.value !== second.value) {
      return {
        [errorName]: true
      };
    }
  };
}
