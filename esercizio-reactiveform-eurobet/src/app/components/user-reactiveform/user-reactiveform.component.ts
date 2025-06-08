import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

import { minAgeValidator } from './custom-validator';

@Component({
  selector: 'app-user-reactiveform',
  imports: [ReactiveFormsModule],
  templateUrl: './user-reactiveform.component.html',
  styleUrl: './user-reactiveform.component.sass',
})
export class UserReactiveformComponent {
  userForm = new FormGroup({
    nome: new FormControl('', Validators.required),
    cognome: new FormControl('', Validators.required),
    data: new FormControl('', [Validators.required, minAgeValidator(60)]),
    genere: new FormControl('', Validators.required),
    nazione: new FormControl('', Validators.required),
    codiceFiscale: new FormControl('', Validators.required),
    Provincia: new FormControl('', Validators.required),
  });

  onSubmit() {
    if (this.userForm.valid) {
      console.log('form inviato', this.userForm.value);
    }
  }
}
