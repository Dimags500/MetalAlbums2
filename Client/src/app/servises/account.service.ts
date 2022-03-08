import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable, ReplaySubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IUser } from '../modals/user';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  baseUrl = environment.apiUrl ;
  private currentUserSource = new ReplaySubject<any>(1);
  currentUser$ = this.currentUserSource.asObservable();

constructor( private http : HttpClient) { }

// loging(model : any ){
//   return this.http.post(this.baseUrl + 'user')
// }

getUsers(){

  return this.http.get<any>(this.baseUrl +'User') ;
}

 login(form : NgForm , users : IUser []) {
   
    let username =  form.value.username;
    let password =  form.value.password;
    let user = users.find(x => x.userName == username);
    
    console.log(1);
    
    if(user != null){
      console.log(2);

      if(user?.userName == username && user?.password == password){

        console.log(3 + 'logged in');

        localStorage.setItem('user' ,JSON.stringify({user}));
        this.currentUserSource.next(user)     
      }
    }

  }

  setCurrentUser(user : any){
  
    this.currentUserSource.next(user)     
  }

  logOut(){
    localStorage.removeItem('user');
    this.currentUserSource.next(null);
  }

  

}
