import { Component } from '@angular/core';
// import { MatDialog } from '@angular/material';
import { DialogComponent } from 'src/app/dialog/dialog.component';
// import { MatDialogModule } from '@angular/material';
import {MatDialog} from '@angular/material/dialog';





@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor( public dialog: MatDialog) { }
  openDialog(){
    // this.dialog.open(DialogComponent, {
    //   height: '100%',
    //   width: '600px',
    
    // });
    this.dialog.open(DialogComponent,{panelClass: 'dialog-style'} );
  }

  

}
