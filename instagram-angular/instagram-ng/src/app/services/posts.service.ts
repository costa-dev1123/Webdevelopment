import { Injectable } from '@angular/core';
import { Post } from '../models/post';
import { asyncPost, posts } from '../mockData/posts';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  getAllAsync():Promise<Post[]>{
    return asyncPost;
  }

  getAll():Post[]{
    return posts;
  }

  getPostById(id:number):Post | undefined{
    return posts.find(p => p.id == id);
  }

}
