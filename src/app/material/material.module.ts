import { NgModule } from '@angular/core';
import { MatButtonModule, MatMenuModule} from '@angular/material';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';



const material= [
  MatButtonModule,
  MatMenuModule,
  MatToolbarModule,
  MatDialogModule,
  MatInputModule


];
@NgModule({
  declarations: [],
  imports: [
    material
  ],
  exports: [
    material 
  ]
})
export class MaterialModule { }
