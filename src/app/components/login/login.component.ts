import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { User } from 'src/app/models/User.modal';
import { Event } from 'src/app/models/Event';


import { AuthService } from 'src/app/services/auth.service';
import { EventService } from 'src/app/services/event.service';
import { UserService } from 'src/app/services/user.service';
import { async, lastValueFrom, switchMap } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = '';


  constructor(  public userserve:UserService,   public route: Router,public eventServe:EventService) 
  {
}
 

async onLogin() {
  debugger
  const loginData = {
    Gmail: this.email,
    Password: this.password
  };

this.userserve.login(loginData).subscribe(
(response)=>
{
debugger
this.userserve.currentuser=response
this.eventServe.eventData=[]
debugger
this.route.navigate(['/home']);
},
(error)=>
{
   // Handle login error
   this.errorMessage = 'איימיל או סיסמא שגויים';
   console.error('Login error:', error);
}

)
 
  


}

//  SignIn()
//  { 
//   debugger
// this.userserve.getUserByGmail(this.userserve.currentuser.Gmail).subscribe
// (
//   (data:User)=>{
//     this.userserve.currentuser=data;
//     this.route.navigate(["/home"])

//   },
//   (error)=>
//   {
//     console.error('error fetching user:',error);
//   }

// )
// }

}
