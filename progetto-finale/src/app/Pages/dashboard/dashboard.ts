import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { Header } from '../../Components/header/header';

@Component({
  selector: 'app-dashboard',
  imports: [RouterModule, RouterOutlet, Header],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {}
