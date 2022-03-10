import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AccountService } from '../servises/account.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  currentUser$! : Observable<any>
  constructor(private account : AccountService , private router : Router ){

     account.currentUser$.subscribe((res)=>{
       this.currentUser$ = res;
     }, error =>{
       console.log(error);
       
     })
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
      if(this.currentUser$){        
        // this.router.navigate(['admin'])
        return true

      }
      else{
        this.router.navigate(['albums'])
        return false;

      }
  }
  
}
