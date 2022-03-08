import { Component, OnInit } from '@angular/core';
import { IAuth } from 'src/app/modals/auth';
import { IAuthor } from 'src/app/modals/author';
import { ISong } from 'src/app/modals/song';
import { ApiService } from 'src/app/servises/api.service';

@Component({
  selector: 'app-songs',
  templateUrl: './songs.component.html',
  styleUrls: ['./songs.component.css']
})
export class SongsComponent implements OnInit {

  songs: ISong [] = [];
  authors : IAuthor [] = [] ;
  constructor(private api : ApiService) { }

  ngOnInit() {
    this.getSongs();
    this.getAuthors();
  }

  getSongs(){
    this.api.get('song').subscribe((res)=>{
  this.songs = res ;  
    }, error => {
      console.log(error);
      
    });
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
    name = this.authors[id -1 ] ;
    return name.name
  }

}
