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
import { AboutComponent } from './about/about.component';
import { CategoryComponent } from './category/category.component';
import { AuthGuardService } from 'src/app/services/auth-guard.service';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';
import { AngularFireDatabaseModule } from 'angularfire2/database';

var firebaseConfig = {
  apiKey: "AIzaSyB1Au9b21gGVsgo01g3SGC4U8LBFwh22mg",
  authDomain: "stepsapp-59394.firebaseapp.com",
  databaseURL: "https://stepsapp-59394.firebaseio.com",
  projectId: "stepsapp-59394",
  storageBucket: "stepsapp-59394.appspot.com",
  messagingSenderId: "207616320982",
  appId: "1:207616320982:web:9e8fcdf5a7b713d3727077",
  measurementId: "G-QK7NTJRMRX"
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
    PageNotFoundComponent,
    AboutComponent,
    CategoryComponent
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
    AngularFireDatabaseModule,
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

  providers: [

    AuthGuardService,
    AuthService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
