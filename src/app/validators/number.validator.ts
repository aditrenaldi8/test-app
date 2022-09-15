import {FormControl} from "@angular/forms";

export function numberValidator(form: FormControl) {
  let REGEXP = /^\d+$/i;
  if (form.value) {
    return REGEXP.test(form.value) ? null : {
      validateNumber: {
        valid: false
      }
    };
  } else {
    return null;
  }
}