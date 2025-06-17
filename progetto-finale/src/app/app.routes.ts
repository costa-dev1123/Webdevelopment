import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { Login } from './Pages/login/login';
import { Dashboard } from './Pages/dashboard/dashboard';
import { Feed } from './Components/feed/feed';
import { MyPosts } from './Components/my-posts/my-posts';

export const routes: Routes = [
  { path: '', component: Login },
  { path: 'dashboard', component: Dashboard },
  { path: 'dashboard/feed', component: Feed },
  { path: 'dashboard/myposts', component: MyPosts },
  { path: 'dashboard/createpost', component: MyPosts },
];
