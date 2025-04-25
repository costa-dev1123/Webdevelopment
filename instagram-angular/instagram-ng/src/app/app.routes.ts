import { Routes } from '@angular/router';
import { FeedComponent } from './components/feed/feed.component';
import { PostDetailComponent } from './components/post-detail/post-detail.component';

export const routes: Routes = [
  {
    path: '',
    component: FeedComponent,
  },
  {
    path: 'post/:id',
    component: PostDetailComponent,
  },
];
