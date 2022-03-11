import { Component, Input, OnInit } from '@angular/core';
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

  @Input() edit : boolean = false ;
  @Input() id : any ;

  authors! : IAuthor[] ;
  albums! : IAlbum [] ;
  song! : ISong ;

  

  constructor(private api : ApiService) { }

  ngOnInit() {
    this.getAlbums();
    this.getAuthors();


    if(this.edit){
      console.log(this.id);
      this.getSongById();

    }

  }

  onSubmit(form : NgForm){
  let x = form.value; 
  let findAuthor = this.authors.find(z => z.name == x.selectedAuthor)?.id as any;
  let findAlbum = this.albums.find(z => z.name == x.selectedAlbum)?.id as any;
  this.song  =  {name : x.songName , year : x.songYear  , authorID : findAuthor | 1 , albumID : findAlbum | 1 , trackNumber : x.trackNumber } ;
  this.postSong(this.song)
    
  }

  editSong(form : NgForm){
    let x = form.value; 
    let findAuthor = this.authors.find(z => z.name == x.selectedAuthor)?.id as any;
    let findAlbum = this.albums.find(z => z.name == x.selectedAlbum)?.id as any;
    this.song  =  {name : x.songName , year : x.songYear  , authorID : findAuthor | 1 , albumID : findAlbum | 1 , trackNumber : x.trackNumber , id : this.id } ;
    console.log(this.song);
  }

  initSong(id: any ){


    // let findAuthor = this.authors.find(z => z.name == x.selectedAuthor)?.id as any;
    // let findAlbum = this.albums.find(z => z.name == x.selectedAlbum)?.id as any;
    // this.song  =  {name : x.songName , year : x.songYear  , authorID : findAuthor | 1 , albumID : findAlbum | 1 , trackNumber : x.trackNumber , id : this.id } ;
    // console.log(this.song);
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

  getAuthorName(id: any){
  let name ;
  name = this.authors[id -1 ] ;
   return name.name
  }

  getAlbumName(id: any){

    let album ;
    album = this.albums[id-1]    
     return album.name
    }

  postSong(song :ISong){
    this.api.post('song' , song).subscribe() ; 
  }

  getSongById(){
    this.api.getById('song', this.id).subscribe((res)=>{
    this.song  = res;    
    });
  }






}
