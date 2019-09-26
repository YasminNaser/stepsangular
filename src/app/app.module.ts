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
import { CustomFormsModule } from 'ng2-validation'
import { ReactiveFormsModule } from '@angular/forms';
// For Google Map 
import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DialogComponent,
    ContactComponent,
    BlogComponent,
    HomeComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFontAwesomeModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    CustomFormsModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyC3NVM-2584m6EdL_ie-riCC5Kx009IpC4'
    }) 
  ],
  entryComponents: [
    DialogComponent
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
