import { Component, inject, signal, WritableSignal } from '@angular/core';
import { Post } from '../../models/post';
import { RouterModule } from '@angular/router';
import { PostDetailComponent } from '../post-detail/post-detail.component';
import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'app-feed',
  imports: [RouterModule, PostDetailComponent],
  templateUrl: './feed.component.html',
  styleUrl: './feed.component.scss',
})
export class FeedComponent {
  private _postsService = inject(PostsService);
  posts:Post[] = this._postsService.getAll();
  asyncPosts:WritableSignal<Post[] | undefined> = signal(undefined);
  ngOnInit(){
    this._postsService.getAllAsync().then(posts => {
      this.asyncPosts.set(posts);
    })
  }
}