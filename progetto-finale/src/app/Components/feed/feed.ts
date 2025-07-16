import { Component, ResourceRef } from '@angular/core';
import { Post, User } from '../../model/postmodel';
import { httpResource } from '@angular/common/http';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-feed',
  imports: [RouterModule],
  templateUrl: './feed.html',
  styleUrl: './feed.css',
})
export class Feed {
  postResource: ResourceRef<Post[] | undefined> = httpResource(
    () => 'https://jsonplaceholder.typicode.com/posts/'
  );

  userResource: ResourceRef<User[] | undefined> = httpResource(
    () => 'https://jsonplaceholder.typicode.com/users/'
  );
}
