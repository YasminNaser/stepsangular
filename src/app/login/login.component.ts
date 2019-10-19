import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { auth } from 'firebase/app';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( private afAuth: AngularFireAuth) { }

  ngOnInit() {
  }
  loging(){
    this.afAuth.auth.signInWithRedirect(new auth.GoogleAuthProvider());

  }
  // loginfb(){
  //   this.afAuth.auth.signInWithRedirect(new auth.FacebookAuthProvider());

  // }

}
