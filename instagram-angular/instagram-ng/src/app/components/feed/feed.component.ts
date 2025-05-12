import {
  Component,
  inject,
  signal,
  WritableSignal,
  resource,
  ResourceRef,
} from '@angular/core';
import { Post } from '../../models/post';
import { RouterModule } from '@angular/router';
import { PostDetailComponent } from '../post-detail/post-detail.component';
import { PostsService } from '../../services/posts.service';
import { rxResource } from '@angular/core/rxjs-interop';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-feed',
  imports: [RouterModule],
  templateUrl: './feed.component.html',
  styleUrl: './feed.component.scss',
})
export class FeedComponent {
  private _postsService = inject(PostsService);
  posts: Post[] = this._postsService.getAll();
  asyncPosts: WritableSignal<Post[] | undefined> = signal(undefined);
  private _http = inject(HttpClient);

  postsResource: ResourceRef<any | undefined> = rxResource({
    loader: () => this._http.get('https://jsonplaceholder.typicode.com/users'),
  });

  // 'https://jsonplaceholder.typicode.com/users';

  // ngOnInit(){
  //   this._postsService.getAllAsync().then(posts => {
  //     this.asyncPosts.set(posts);
  //   })
  // }
}
