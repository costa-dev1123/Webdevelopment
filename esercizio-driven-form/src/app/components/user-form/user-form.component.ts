import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  imports: [FormsModule],
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.scss',
})
export class UserFormComponent {
  user = {
    name: '',
    surname: '',
    date: '',
    gender: '',
    country: '',
    province: '',
    city: '',
    code: '',
  };

  onSubmit() {
    console.log('Form inviato!', this.user);
  }
}
