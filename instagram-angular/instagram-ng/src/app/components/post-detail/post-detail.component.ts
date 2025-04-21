import { Component, input } from '@angular/core';
import { Posts } from '../../models/post';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-post-detail',
  imports: [RouterModule],
  templateUrl: './post-detail.component.html',
  styleUrl: './post-detail.component.scss',
})
export class PostDetailComponent {
  id = input<number>();

  post = input<Posts>();
}
