import { Component, ResourceRef } from '@angular/core';
import { Post, User } from '../../models/post';

import { httpResource } from '@angular/common/http';

@Component({
  selector: 'app-feed',
  imports: [],
  templateUrl: './feed.component.html',
  styleUrl: './feed.component.scss',
})
export class FeedComponent {
  postsHttpResource: ResourceRef<Post[] | undefined> = httpResource(
    () => 'https://jsonplaceholder.typicode.com/posts/'
  );

  usersHttpResource: ResourceRef<User[] | undefined> = httpResource(
    () => 'https://jsonplaceholder.typicode.com/users/'
  );
}
