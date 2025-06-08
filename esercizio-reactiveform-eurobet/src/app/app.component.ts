import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserReactiveformComponent } from './components/user-reactiveform/user-reactiveform.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, UserReactiveformComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass',
})
export class AppComponent {
  title = 'esercizio-reactiveform-eurobet';
}
