import { Injectable } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Route } from '@angular/router';
import { CanActivate } from '@angular/router';
import { map } from 'rxjs/Operators';
import { Router } from '@angular/router';
import { RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {


  constructor(private authservice:AuthService,private router:Router) { }
  canActivate(router, state: RouterStateSnapshot){
    return this.authservice.user$.pipe(
      map( user=>{
        if(user) {return true;}
        else{
           this.router.navigate(['/home'])
           return false;
        }
      } )
    )
    
  }

}
