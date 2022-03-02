import { Component, OnInit } from '@angular/core';
import { IAuthor } from 'src/app/modals/author';
import { ApiService } from 'src/app/servises/api.service';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {
  authors : IAuthor[] = [];

  constructor(private api : ApiService) { }

  ngOnInit() {
    this.getAuthors();
    
  }

  getAuthors(){
    this.api.get('author').subscribe((data)=>{
     this.authors = data     
      
    } ,
    error => console.log(error)
    )
  }

  deleteAuthor(id: any){
    this.api.deleteAuthor( id).subscribe();
    location.reload();
    
  }
}
