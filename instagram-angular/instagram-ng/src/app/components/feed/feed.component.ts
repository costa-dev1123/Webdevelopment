import { Component, inject } from '@angular/core';
import { Post } from '../../models/post';
import { RouterModule } from '@angular/router';
import { PostDetailComponent } from '../post-detail/post-detail.component';

@Component({
  selector: 'app-feed',
  imports: [RouterModule],
  templateUrl: './feed.component.html',
  styleUrl: './feed.component.scss',
})
export class FeedComponent {
  private _postsService = inject(PostsService);

  posts: Post[] = this._postsService.getAll();
}
