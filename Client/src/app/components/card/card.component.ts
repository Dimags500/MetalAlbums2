import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { timeout } from 'rxjs';
import { IAlbum } from 'src/app/modals/album';
import { IAuthor } from 'src/app/modals/author';
import { ISong } from 'src/app/modals/song';
import { ApiService } from 'src/app/servises/api.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
@Input() album! : IAlbum
@Input() authors! : IAuthor[] ;
songs : ISong []  = [] ;
curr_songs : ISong[] = [];
isAdmin = false;
editSongMode = false;

id :any ;

  constructor(private api : ApiService , private routh : ActivatedRoute ) { }

  ngOnInit() {

    this.id = this.routh.snapshot.paramMap.get('id');
    this.getAlbum();
    this.getAuthors();
    this.getSongs();
    this.isAdmin = true;


    
  }

  
  getAlbum(){
    this.api.getById('album', this.id).subscribe((data : IAlbum)=>{
     this.album = data
      
    } ,
    error => console.log(error)
    )
  }

  getAuthors(){
    this.api.get('author').subscribe((data)=>{
     this.authors = data     
      
    } ,
    error => console.log(error)
    )
  }

  getAuthorName(id: any){
    let name ;
    name = this.authors[id -1] ;
    return name.name
  }

  getSongs(){
    this.api.get('song').subscribe((res)=>{
      this.songs = res ;
      this.currSongs(this.id);

      
    }, error => {
      console.log(error);
      
    })
  }

  currSongs(albumID : any ){

    let s = this.songs.filter(x => x.albumID == albumID) ;
    this.curr_songs = s ;
    console.log(s);
    
  }

 

  deleteSong(id : any){
  console.log(id);

  this.api.deleteSong(id).subscribe();
  location.reload();      

  }

  editSong(id : any){
    this.editSongModeToggle() ;
    


  }
  editSongModeToggle(){
    this.editSongMode = !this.editSongMode;
  }

  


}
