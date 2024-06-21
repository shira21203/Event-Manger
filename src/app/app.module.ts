import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import {MatDatepickerModule} from '@angular/material/datepicker';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { HomeComponent } from './components/home/home.component';
import { AuthComponent } from './components/auth/auth.component';
import { EventListComponent } from './components/event-list/event-list.component';
import { AddEventComponent } from './components/add-event/add-event.component';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { GuestListComponent } from './components/guest-list/guest-list.component';
import { AddGuestComponent } from './components/add-guest/add-guest.component';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
 import { environment } from 'src/enviroment/enviroment';
import { SignupComponent } from './components/signup/signup.component';
 import { EventDetailsComponent } from './components/event-details/event-details.component';
 
  

@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    HomeComponent,
    AuthComponent,
    EventListComponent,
    AddEventComponent,
    GuestListComponent,
    AddGuestComponent,
    SignupComponent,
    EventDetailsComponent
  ],
  imports: [
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
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    MatDatepickerModule
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
