import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from 'src/app/contact/contact.component';
import { BlogComponent } from 'src/app/blog/blog.component';
import { HomeComponent } from 'src/app/home/home.component';
import { ProfileComponent } from 'src/app/profile/profile.component';
import { PageNotFoundComponent } from 'src/app/page-not-found/page-not-found.component';
import { AboutComponent } from 'src/app/about/about.component';
import { CategoryComponent } from 'src/app/category/category.component';
import { AuthGuardService } from 'src/app/services/auth-guard.service';

const routes: Routes = [
  { path:'', component:HomeComponent },    
  { path:'home', component:HomeComponent },  
  { path:'about', component:AboutComponent },
  { path:'category', component:CategoryComponent },
  // { path:'contact', component:ContactComponent},
  { path:'contact', component:ContactComponent,canActivate:[AuthGuardService] },
  { path:'profile', component:ProfileComponent } 
  // {path: '**', component:PageNotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
