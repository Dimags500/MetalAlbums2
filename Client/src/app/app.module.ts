import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AdminPageComponent } from './admin/admin-page/admin-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ApiService } from './servises/api.service';
import { HeaderComponent } from './components/header/header.component';
import { CardComponent } from './components/card/card.component';
import { HomeComponent } from './components/home/home.component';
import { AddEditFormComponent } from './forms/AddEditForm/AddEditForm.component';
import { SongFormComponent } from './forms/SongForm/SongForm.component';
import { AuthorFormComponent } from './forms/authorForm/authorForm.component';
import { AuthorsComponent } from './components/authors/authors.component';
import { OrderByPipe } from './pipes/OrderBy.pipe';
import {NgPipesModule} from 'ngx-pipes';
import { CardsComponent } from './components/cards/cards.component';
import { AuthorCardComponent } from './components/authors/author-card/author-card.component';
import { LoginComponent } from './components/header/login/login/login.component';
import { SongsComponent } from './components/songs/songs.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {TableModule} from 'primeng/table';
import {CarouselModule} from 'primeng/carousel';
import { AuthorComponent } from './components/author/author.component';
import { AuthGuard } from './guards/auth.guard';
import { AddSongComponent } from './forms/addSong/addSong.component';
import {DropdownModule} from 'primeng/dropdown';
import {InputTextModule} from 'primeng/inputtext';
import {InputNumberModule} from 'primeng/inputnumber';
import {ListboxModule} from 'primeng/listbox';
import {SplitterModule} from 'primeng/splitter';
import { NgSelectModule } from '@ng-select/ng-select';











@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent ,
    HomeComponent,
    CardComponent,
    AdminPageComponent ,
    AddEditFormComponent , 
    SongFormComponent , 
    AuthorFormComponent ,
    AuthorsComponent ,
    AuthorComponent ,
    OrderByPipe ,
    CardsComponent ,
    AuthorCardComponent ,
    LoginComponent, 
    SongsComponent , 
    AddSongComponent

    

    
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule ,
    FormsModule ,
    ReactiveFormsModule ,
    NgPipesModule ,
    TableModule ,
    CarouselModule ,
    DropdownModule,
    InputTextModule ,
    InputNumberModule ,
    ListboxModule ,
    SplitterModule ,
    NgSelectModule    
  
  ],
  providers: [ApiService , AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
