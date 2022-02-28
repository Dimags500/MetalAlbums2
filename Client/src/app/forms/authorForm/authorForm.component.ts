import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ApiService } from 'src/app/servises/api.service';

@Component({
  selector: 'app-authorForm',
  templateUrl: './authorForm.component.html',
  styleUrls: ['./authorForm.component.css']
})
export class AuthorFormComponent implements OnInit {

  constructor(private api : ApiService) { }

  ngOnInit() {
  }

  onSubmit(form : NgForm){
  
  let author = form.value; 
  this.postAuthor(author);
  location.reload();

  }

  postAuthor(name : any){
    this.api.post('Author' , name ).subscribe();
  }

}
