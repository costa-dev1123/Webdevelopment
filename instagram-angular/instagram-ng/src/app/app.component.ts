import { Component, inject, ResourceRef, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'instagram-ng';

  postId = signal(1);

  private _postService = inject(PostsService);

  postResource: ResourceRef<Post[] | undefined> = rxResource({
    loader: () => this._postService.getAllPosts(),
  });

  postIdResource: ResourceRef<Post1 | undefined> = rxResource({
    request: () => ({ id: this.postId() }),
    loader: ({ request }) => this._postService.getPostById1(request.id),
  });

  postHttpResource: ResourceRef<Post1 | undefined> = httpResource(
    () => `https://jsonplaceholder.typicode.com/posts/${this.postId()}`
  );
}
