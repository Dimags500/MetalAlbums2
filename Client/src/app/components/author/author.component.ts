import { Component, OnInit } from '@angular/core';
import { IAlbum } from 'src/app/modals/album';
import { IAuthor } from 'src/app/modals/author';
import { ApiService } from 'src/app/servises/api.service';
import { ActivatedRoute } from '@angular/router';
import { timeout } from 'rxjs';


@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {

  author! : IAuthor;
  allAlbums! : IAlbum[]  ; 
  authorAlbums! : IAlbum[]  ;
  id : any ;

  constructor(private api :ApiService , private routh : ActivatedRoute) {}

  ngOnInit() {

    this.id = this.routh.snapshot.paramMap.get('id');    
    this.getAuthor(this.id) ;
    
    this.getAlbums();


    setTimeout(()=>{       
      this.findAlbums();
  }, 1000);

  }


  getAuthor(id : any ){
    this.api.getById('author' ,id).subscribe( (res)=> {
      this.author = res ;
      
    }, error =>{
      console.log(error);
      
    });

  }

  getAlbums( ){

    this.api.get('album').subscribe( (res)=> {
      this.allAlbums = res ;
      console.log(this.allAlbums);
      
      
      
    }, error =>{
      console.log(error);
      
    });

  }

  findAlbums(){
      this.authorAlbums = this.allAlbums.filter(x => x.authorID == this.author.id);

      
  }

  

}
