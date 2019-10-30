import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import { auth } from 'firebase/app';
import * as firebase from 'firebase';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$: Observable<firebase.User>;  

  constructor(private afAuth: AngularFireAuth,private route: ActivatedRoute) {
    //Rest To User
    this.user$ = afAuth.authState;
   }
  loging(){
    // let returnUrl= this.route.snapshot.queryParamMap.get('returnUrl') || '/';
    // localStorage.setItem('returnUrl', returnUrl);
    this.afAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());

  }
  logout(){
    this.afAuth.auth.signOut();

  }
}
