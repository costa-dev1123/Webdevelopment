import { Component, ResourceRef } from '@angular/core';
import { Post, User } from '../../model/postmodel';
import { httpResource } from '@angular/common/http';

@Component({
  selector: 'app-my-posts',
  imports: [],
  templateUrl: './my-posts.html',
  styleUrl: './my-posts.css',
})
export class MyPosts {
  postResource: ResourceRef<Post[] | undefined> = httpResource(
    () => 'https://jsonplaceholder.typicode.com/posts/'
  );

  userResource: ResourceRef<User[] | undefined> = httpResource(
    () => 'https://jsonplaceholder.typicode.com/users/'
  );

  deletePost(postId: number) {
    const posts = this.userResource.value();
    if (!posts) {
      return;
    }
    this.userResource.set(posts.filter((p) => p.id !== postId));
  }
}
