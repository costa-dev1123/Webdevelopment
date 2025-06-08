import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

// verificare che l'utente abbia almeno 60 anni e che la data digitata sia formalmente valida

export function minAgeValidator(minAge: number): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const inputDate = new Date(control.value);
    const today = new Date();

    if (isNaN(inputDate.getTime())) {
      return { invalidDate: true };
    }

    const age = today.getFullYear() - inputDate.getFullYear();
    const monthDiff = today.getMonth() - inputDate.getMonth();
    const dayDiff = today.getDate() - inputDate.getDate();

    const adjustedAge =
      monthDiff < 0 || (monthDiff === 0 && dayDiff < 0) ? age - 1 : age;

    return adjustedAge >= minAge
      ? null
      : { underage: { requiredAge: minAge, actualAge: adjustedAge } };
  };
}

// export function forbiddenAgeValidator(nameRe: RegExp): ValidatorFn {
//   return (control: AbstractControl): ValidationErrors | null => {
//     const forbidden = nameRe.test(control.value);
//     return forbidden ? { nomenonvalido: { value: control.value } } : null;
//   };
// }
