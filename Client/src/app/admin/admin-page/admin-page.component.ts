import { Component, OnInit, Output } from '@angular/core';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';
import { IAlbum } from 'src/app/modals/album';
import { debounceTime, distinctUntilChanged } from "rxjs/operators";
import { ApiService } from 'src/app/servises/api.service';
import { IAuthor } from 'src/app/modals/author';
import { ISong } from 'src/app/modals/song';


@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {

  albums:IAlbum[] = [];
  authors: IAuthor[] = [] ;
  songs : ISong []  = [] ;
  showSongs = false ;
  curr_songs : ISong[] = [];

//modes to toggle
  createMode : boolean = false ;
  editMode : boolean = false ;
  albumToEditID! : any ;
  createSong  = false;
  createAuthor = false ;



  // serch field
  secrField!: FormControl ;
  secrches : string[] = [] ;

  constructor( private api : ApiService) { }

  ngOnInit(): void {

    //-----------  serach term ----------
    // this.serch();
    
    this.getAlbums();
    this.getAuthors();
    this.getSongs();
  }

  private serch() {
    this.secrField = new FormControl;
    this.secrField.valueChanges
      .pipe(
        debounceTime(400),
        distinctUntilChanged()
      )
      .subscribe((term: string) => {
        this.secrches.push(term);
      });
  }

  getAlbums(){
    return this.api.get('album').subscribe((data: IAlbum[])=> {

      this.albums = data ;      
    }, (error: any) =>{console.log(error);
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
    name = this.authors[id -1] ;
    return name.name
  }

  getSongs(){
    this.api.get('song').subscribe((res)=>{
      this.songs = res ;
      
    }, error => {
      console.log(error);
      
    })
  }


  deleteAlbum(id: any){

    this.api.delete('album',id).subscribe();
    location.reload();      
  }

  createModeToggle(){
    this.createMode = !this.createMode;
  }


  editModeToggle(id : any ){
    this.albumToEditID = id ;
    this.editMode = !this.editMode ;
  }
  showSongsToggle(albumID : any ){

    let s = this.songs.filter(x => x.albumID == albumID) ;
    this.curr_songs = s ;
    this.showSongs = !this.showSongs;
  }

  refresh(){
    location.reload();      
  }

  createSongToggle(){
    this.createSong = !this.createSong ;
  }
  createAuthorToggle(){
    this.createAuthor = !this.createAuthor;

  }

 

  

}
