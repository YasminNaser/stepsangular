import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';

import { DialogComponent } from './dialog/dialog.component';
// import {DialogService} from './services/dialog.service';
import {MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import { ContactComponent } from './contact/contact.component';
import { BlogComponent } from './blog/blog.component';
import { HomeComponent } from './home/home.component';
import { Observable } from 'rxjs';
import {HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './footer/footer.component';
import { CustomFormsModule,CustomValidators } from 'ng2-validation'
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
// For Google Map 
import { AgmCoreModule } from '@agm/core';
// 1. Import the libs you need
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import * as firebase from 'firebase';
import { environment } from 'src/environments/environment.prod';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
var firebaseConfig = {
  apiKey: "AIzaSyC5xWffVvzDmLIqZQOmU03_US-KL4IEovM",
  authDomain: "steps-bb36c.firebaseapp.com",
  databaseURL: "https://steps-bb36c.firebaseio.com",
  projectId: "steps-bb36c",
  storageBucket: "steps-bb36c.appspot.com",
  messagingSenderId: "967818533041",
  appId: "1:967818533041:web:e46256c57ca180e68faa90",
  measurementId: "G-HBN9KZF00G"
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DialogComponent,
    ContactComponent,
    BlogComponent,
    HomeComponent,
    FooterComponent,
    LoginComponent,
    ProfileComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFontAwesomeModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    CustomFormsModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyC3NVM-2584m6EdL_ie-riCC5Kx009IpC4'
    }),
    // 3. Initialize
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule, // firestore
    AngularFireAuthModule, // auth
    AngularFireStorageModule // storage
  ],
  entryComponents: [
    DialogComponent,
    LoginComponent
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
