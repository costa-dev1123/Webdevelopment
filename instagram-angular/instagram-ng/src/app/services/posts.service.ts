import { Injectable } from '@angular/core';
import { Post } from '../models/post';
import { posts } from '../data/posts';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  constructor() {}

  getAll(): Post[] {
    return posts; //i posts vengono dalla cartella 'DATA'
  }

  getPostById(id: number): Post {
    return posts.find((p) => p.id == id)!;
  }
}
