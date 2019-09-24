import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from 'src/app/contact/contact.component';
import { BlogComponent } from 'src/app/blog/blog.component';
import { HomeComponent } from 'src/app/home/home.component';


const routes: Routes = [
  {path:'contact',component:ContactComponent},
  {path:'blog',component:BlogComponent},
  {path:'home',component:HomeComponent}
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
