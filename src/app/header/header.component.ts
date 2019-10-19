import { Component } from '@angular/core';
// import { MatDialog } from '@angular/material';
import { DialogComponent } from 'src/app/dialog/dialog.component';
import { LoginComponent } from 'src/app/login/login.component';

// import { MatDialogModule } from '@angular/material';
import {MatDialog} from '@angular/material/dialog';
import { AngularFireAuth } from 'angularfire2/auth';
import * as Firebase from 'firebase';






@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  user: Firebase.User;

  constructor( public dialog: MatDialog,public login: MatDialog,private afAuth: AngularFireAuth) { 
    //Rest To User
    this.afAuth.authState.subscribe(user => this.user = user);
  }
  openDialog(){
    // this.dialog.open(DialogComponent, {
    //   height: '100%',
    //   width: '600px',
    
    // });
    this.dialog.open(DialogComponent,{panelClass: 'dialog-style'} );
  }
  openlogin(){
    // this.dialog.open(DialogComponent, {
    //   height: '100%',
    //   width: '600px',
    
    // });
    this.login.open(LoginComponent,{panelClass: 'login-style'} );
  }
  logout(){
    this.afAuth.auth.signOut();

  }

}
