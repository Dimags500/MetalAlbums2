import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IAlbum } from 'src/app/modals/album';
import { IAuthor } from 'src/app/modals/author';
import { ApiService } from 'src/app/servises/api.service';
import { FormGroup, FormControl } from '@angular/forms';
import { ISong } from 'src/app/modals/song';
import { timeout } from 'rxjs';


@Component({
  selector: 'app-addSong',
  templateUrl: './addSong.component.html',
  styleUrls: ['./addSong.component.css']
})
export class AddSongComponent implements OnInit {

  albums! : IAlbum [] ;
  authors! : IAuthor[] ;
  song! : ISong;

  selected = '';
  selectedAuthor : any ;
  selectedAlbum : any ;



  constructor(private api: ApiService) { }

  ngOnInit() {

    this.getAlbums() ;
    this.getAuthors();
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


  onSubmit(form : NgForm){

        this.song= {
          name : form.value.songName , 
          year : form.value.songYear ,  
          trackNumber : form.value.trackNumber ,
          albumID : this.selectedAlbum ,
          authorID : this.selectedAuthor
        }
        this.postSong( this.song);

      }



 postSong(song :ISong){
        this.api.post('song' , song).subscribe() ; 
      }
    

 valueChange(event: any) {
        this.selected = event.target.value;
      }
    
}
