import { Component, inject, input } from '@angular/core';
import { Post } from '../../models/post';
import { RouterModule } from '@angular/router';
import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'app-post-detail',
  imports: [RouterModule],
  templateUrl: './post-detail.component.html',
  styleUrl: './post-detail.component.scss',
})
export class PostDetailComponent {
  id = input<number>(); //id del singolo post
  postt = input<Post>();
  private _postsService = inject(PostsService);
  post:Post | undefined;
  ngOnInit(){
    this.post = this._postsService.getPostById(this.id()!);
  }
}
