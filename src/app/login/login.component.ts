import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private serviceauth: AuthService ) { }

  ngOnInit() {
   
  }

  // loginfb(){
  //   this.afAuth.auth.signInWithRedirect(new auth.FacebookAuthProvider());

  // }
  loging(){
    this.serviceauth.loging();
  }
 

}
