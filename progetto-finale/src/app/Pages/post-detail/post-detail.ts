import { Component, input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Header } from '../../Components/header/header';

@Component({
  selector: 'app-post-detail',
  imports: [RouterModule, Header],
  templateUrl: './post-detail.html',
  styleUrl: './post-detail.css',
})
export class PostDetail {
  id = input<number>();
}
