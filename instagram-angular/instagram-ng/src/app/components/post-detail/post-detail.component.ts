import { Component, inject, input, OnInit } from '@angular/core';
import { Post } from '../../models/post';
import { RouterModule } from '@angular/router';

import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'app-post-detail',
  imports: [RouterModule],
  templateUrl: './post-detail.component.html',
  styleUrl: './post-detail.component.scss',
})
export class PostDetailComponent implements OnInit {
  id = input<number>();

  private _postsService = inject(PostsService);

  post: Post | undefined;

  ngOnInit() {
    this.post = this._postsService.getPostById(this.id()!);
  }
}
