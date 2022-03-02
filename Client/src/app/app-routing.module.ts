import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPageComponent } from './admin/admin-page/admin-page.component';
import { AuthorComponent } from './components/author/author.component';
import { AuthorsComponent } from './components/authors/authors.component';
import { CardComponent } from './components/card/card.component';
import { HomeComponent } from './components/home/home.component';
import { SongsComponent } from './components/songs/songs.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {path: 'albums' , component: HomeComponent} ,
  {path: 'album/:id' , component: CardComponent} ,
  {path: 'admin' , component: AdminPageComponent} ,
  {path: 'author/:id' , component: AuthorComponent},
  {path: 'authors' , component: AuthorsComponent} ,
  {path: 'songs' , component: SongsComponent} ,
  // {path: '**', component: PageNotFoundComponent}




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
