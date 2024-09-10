import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 import { HomeComponent } from './components/home/home.component';
 import { AddEventComponent } from './components/add-event/add-event.component'; 
 import { EventDetailsComponent } from './components/event-details/event-details.component';
import { AddGuestComponent } from './components/add-guest/add-guest.component';
 import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { OpenPageComponent } from './components/open-page/open-page.component';
 
const routes: Routes = [
  { path: '', component:OpenPageComponent }, // Default route
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {path:'home',component:HomeComponent},
  { path: 'event-detail', component:EventDetailsComponent },
  {path:'add-event',component:AddEventComponent},
  {path:'add-guest',component:AddGuestComponent},
  { path: 'event-details/:eventCode', component: EventDetailsComponent },
  { path: '**', redirectTo: '' } // Redirect unknown routes to the home page
];

// const routes: Routes = [  
//   { path: 'event/:eventId', component:EventDetailsComponent },
//   { path: 'login', component:LoginComponent },
//   { path: 'register', component: RegisterComponent },
//   { path: 'home', component: HomeComponent  },
//   { path: 'events', component: EventListComponent  },
//   { path: 'add-event', component: AddEventComponent },
//   {path:'add-guest',component:AddGuestComponent},
//  {path:'guests-list',component:GuestListComponent},
//   { path: '', redirectTo: '/login', pathMatch: 'full' },

// ]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
