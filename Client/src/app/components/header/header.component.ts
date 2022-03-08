import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { IUser } from 'src/app/modals/user';
import { AccountService } from 'src/app/servises/account.service';
import { ApiService } from 'src/app/servises/api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

model: any ={} ;
loginMode  = false ;
showLogin = true ;
users: IUser[] = [] ;

currentUser$! : Observable<IUser>;

  constructor(private api: ApiService , public account: AccountService) { }

  

  ngOnInit() {
    this.getCurrentUser();

  }

 
  showLoginToggle(){
    this.showLogin = !this.showLogin;
  }
  loginModeToggle(){
    this.loginMode = !this.loginMode
    this.showLoginToggle();
  }

  logOut(){
    this.account.logOut();
    this.loginMode = false ;
  }

  getCurrentUser(){
    this.account.currentUser$.subscribe(user => {
      this.loginMode = !!user ; 
      this.showLoginToggle();
    }, error => {
      console.log(error);
      
    })
  }



  

}
