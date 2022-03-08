import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ReplaySubject } from 'rxjs';
import { IUser } from 'src/app/modals/user';
import { AccountService } from 'src/app/servises/account.service';
import { ApiService } from 'src/app/servises/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  users: IUser[] = [] ;


  @Output() loginEvent = new EventEmitter<boolean>();
 

  constructor(private account : AccountService) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers(){
    this.account.getUsers().subscribe((res)=>{
      this.users = res;
    }, error => {
      console.log(error);
      
    });
  }


  // login(form : NgForm){
  //   let username =  form.value.username;
  //   let password =  form.value.password;
  //   let user = this.users.find(x => x.userName == username);
    
  //   console.log(1);
    
  //   if(user != null){
  //     console.log(2);

  //     if(user?.userName == username && user?.password == password){

  //       console.log(3 + 'logged in');
  //       this.loginEvent.emit();   
  //       localStorage.setItem('user' ,JSON.stringify({user}));
  //       this.currentUserSource.next(user)     
  //     }
  //   }

  // }

  // setCurrentUser(user : any ){
  //   this.currentUserSource.next(user);
  // }

  // userInit(){
  // const user = JSON.parse(localStorage.getItem('user') as string); 
  // this.setCurrentUser(JSON.parse(user)) ; 
  // }

  login(form: NgForm){

   this.account.login(form , this.users);
  }
  
    

}
