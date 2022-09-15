import { FormControl } from "@angular/forms";

export function whitespaceValidator(form: FormControl) {
  let isWhitespace = (form.value || '').trim().length != 0;
  return isWhitespace ? null : {
    validateWhitespace: {
      valid: false
    }
  }
}