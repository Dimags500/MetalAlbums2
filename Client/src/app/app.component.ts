import { Component, OnInit } from '@angular/core';
import { AccountService } from './servises/account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Client';

  constructor(private account: AccountService ) { }

  ngOnInit(): void {
    this.setCurrentUser();
  }




setCurrentUser(){

  const user = JSON.parse(localStorage.getItem('user') as string); 
  this.account.setCurrentUser(user) ;
}

}

