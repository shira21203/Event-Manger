import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './components/auth/auth.component';
import { HomeComponent } from './components/home/home.component';
import { EventListComponent } from './components/event-list/event-list.component';
import { AddEventComponent } from './components/add-event/add-event.component';
import { GuestListComponent } from './components/guest-list/guest-list.component';
import { AddGuestComponent } from './components/add-guest/add-guest.component';
 import { SignupComponent } from './components/signup/signup.component';
const routes: Routes = [  
  { path: 'login', component: AuthComponent },
  { path: 'home', component: HomeComponent  },
  { path: 'events', component: EventListComponent  },
  { path: 'add-event', component: AddEventComponent },
  { path: 'events/:id/guests', component: GuestListComponent  },
  { path: 'events/:id/add-guest', component: AddGuestComponent },
 { path: 'signup', component: SignupComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },

]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
