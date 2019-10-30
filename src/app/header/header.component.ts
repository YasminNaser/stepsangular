import { Component } from '@angular/core';
import { DialogComponent } from 'src/app/dialog/dialog.component';
import { LoginComponent } from 'src/app/login/login.component';
import {MatDialog} from '@angular/material/dialog';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor( public dialog: MatDialog,public login: MatDialog,private serviceauth: AuthService) { 
 
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
    this.serviceauth.logout();
  }


}
