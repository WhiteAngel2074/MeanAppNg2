import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { PostsComponent } from './posts/posts.component';

// We are simply telling our router that whenever the root route
// / is visited, redirect to /posts. We then decalre the /posts route.
const ROUTES = [
  {
    path: '',
    redirectTo: 'posts',
    pathMatch: 'full'
  },
  {
    path:'posts',
    component: PostsComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES) // ajouter la route à l'application !!
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
