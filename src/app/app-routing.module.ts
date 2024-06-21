import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './components/auth/auth.component';
import { HomeComponent } from './components/home/home.component';
import { EventListComponent } from './components/event-list/event-list.component';
import { AddEventComponent } from './components/add-event/add-event.component'; 
 import { SignupComponent } from './components/signup/signup.component';
import { EventDetailsComponent } from './components/event-details/event-details.component';
import { AddGuestComponent } from './components/add-guest/add-guest.component';
import { GuestListComponent } from './components/guest-list/guest-list.component';
 
const routes: Routes = [  
  { path: 'event/:eventId', component:EventDetailsComponent },
  { path: 'login', component: AuthComponent },
  { path: 'home', component: HomeComponent  },
  { path: 'events', component: EventListComponent  },
  { path: 'add-event', component: AddEventComponent },
 { path: 'signup', component: SignupComponent },
 {path:'add-guest',component:AddGuestComponent},
 {path:'guests-list',component:GuestListComponent},
  { path: '', redirectTo: '/login', pathMatch: 'full' },

]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
