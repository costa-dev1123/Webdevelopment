import { inject, Injectable } from '@angular/core';
import { Post, Post1 } from '../models/post';
import { asyncPost, posts } from '../mockData/posts';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  private _http = inject(HttpClient);

  getAllAsync(): Promise<Post[]> {
    return asyncPost;
  }

  getAllPosts() {
    return this._http.get<Post[]>('https://jsonplaceholder.typicode.com/users');
  }

  getPostById1(id: number): Observable<Post1> {
    return this._http.get<Post1>(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
  }

  //approccio con gli observable
  getAll(): Post[] {
    return posts;
  }

  getPostById(id: number): Post | undefined {
    return posts.find((p) => p.id == id);
  }
}
