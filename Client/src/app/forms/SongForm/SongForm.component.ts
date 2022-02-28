import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IAlbum } from 'src/app/modals/album';
import { IAuthor } from 'src/app/modals/author';
import { ISong } from 'src/app/modals/song';
import { ApiService } from 'src/app/servises/api.service';

@Component({
  selector: 'app-SongForm',
  templateUrl: './SongForm.component.html',
  styleUrls: ['./SongForm.component.css']
})
export class SongFormComponent implements OnInit {

  authors : IAuthor[] = [];
  albums : IAlbum [] = [];
  song! : ISong ;

  constructor(private api : ApiService) { }

  ngOnInit() {
    this.getAlbums();
    this.getAuthors();
  }

  onSubmit(form : NgForm){

  let x = form.value; 
  let findAuthor = this.authors.find(z => z.name == x.selectedAuthor)?.id as any;
  let findAlbum = this.albums.find(z => z.name == x.selectedAlbum)?.id as any;
  

  this.song  =  {name : x.songName , year : x.songYear  , authorID : findAuthor | 1 , albumID : findAlbum | 1 , trackNumber : x.trackNumber } ;
  console.log(this.song);

  this.postSong(this.song)
    

  }

  getAlbums(){
    this.api.get('album').subscribe((res)=> {
      this.albums = res;
    }, 
    error =>{
      console.log(error);
    }
    );
  }
  getAuthors(){
this.api.get('author').subscribe((res)=> {
  this.authors = res ;
}, 
error => console.log(error));
  }

  postSong(song :ISong){
    this.api.post('song' , song).subscribe() ; 
  }




}
