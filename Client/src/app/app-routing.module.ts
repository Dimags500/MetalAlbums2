import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPageComponent } from './admin/admin-page/admin-page.component';
import { AuthorComponent } from './components/author/author.component';
import { CardComponent } from './components/card/card.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {path: 'album/:id' , component: CardComponent} ,
  {path: 'admin' , component: AdminPageComponent} ,
  {path: 'author/:id' , component: AuthorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
