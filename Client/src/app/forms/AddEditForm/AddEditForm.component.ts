import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IAuthor } from 'src/app/modals/author';
import { IAlbum } from 'src/app/modals/album';
import { ApiService } from 'src/app/servises/api.service';

@Component({
  selector: 'app-AddEditForm',
  templateUrl: './AddEditForm.component.html',
  styleUrls: ['./AddEditForm.component.css']
})
export class AddEditFormComponent implements OnInit {
authors: IAuthor[] = [];
// selectedAuthor ='';
album!: IAlbum ;

  constructor(private http : HttpClient , private api : ApiService) { }

  ngOnInit() {

    this.getAuthors();
  }


  onSubmit(form : NgForm){

  let x = form.value; 
  let findAuthor = this.authors.find(z => z.name == x.selectedAuthor)?.id as any ;
  let num =1 ;
  console.log(findAuthor);
  

  this.album  =  {name : x.albumName , year : x.albumYear  , authorID : findAuthor | num , albumPicture : x.albumPicture  } ;
  
  console.log(this.album);
  
  
  this.postAlbum(this.album);
  // location.reload();      

  
  }

  getAuthors(){
    this.api.get('author').subscribe((data)=>{
     this.authors = data     
      
    } ,
    error => console.log(error)
    )
  }

  postAlbum(form : any){
    this.api.post('Album' , form).subscribe();
  }

  

}



