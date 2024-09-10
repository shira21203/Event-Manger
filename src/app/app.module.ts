import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
 import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
 import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { HomeComponent } from './components/home/home.component';
 import { AddEventComponent } from './components/add-event/add-event.component';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
 import { AddGuestComponent } from './components/add-guest/add-guest.component';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
 import { environment } from 'src/enviroment/enviroment';
  import { EventDetailsComponent } from './components/event-details/event-details.component';
 import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { OpenPageComponent } from './components/open-page/open-page.component';
import { SuccessPopupComponent } from './components/success-popup/success-popup.component';
import { PopupComponent } from './components/popup/popup.component';
import { FormsModule } from '@angular/forms';

  

@NgModule({
  declarations: [
    AppComponent, 
    HomeComponent, 
     AddEventComponent,
     AddGuestComponent, 
    EventDetailsComponent, 
    LoginComponent,
    RegisterComponent,
    LoginComponent,
    OpenPageComponent,
    SuccessPopupComponent,
    PopupComponent
  ],
  imports: [
    MatDialogModule,
    HttpClientModule, 
    RouterModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    BrowserAnimationsModule, // Add this if not already added
    MatSlideToggleModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyCr8T21RKxoWpLVsRs41mq4LA17VKOjodM",
      authDomain: "eventmanagar.firebaseapp.com",
      projectId: "eventmanagar",
      storageBucket: "eventmanagar.appspot.com",
      messagingSenderId: "847150569458",
      appId: "1:847150569458:web:aed2e09521fa3e9969fd6b",
      measurementId: "G-EBN2501FDK"
    }
    ),
    AngularFireAuthModule,
    MatDatepickerModule
  ],
    
    providers: [PopupComponent ],
  bootstrap: [AppComponent]
})
export class AppModule { }
