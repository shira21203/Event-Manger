
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/User.modal';
import { AuthService } from 'src/app/services/auth.service';
import { EventService } from 'src/app/services/event.service';
import { UserService } from 'src/app/services/user.service';
 @Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  email = '';
  password = '';
  userName = '';  // Add this line to define the userName property
  errorMessage: string = '';
  isPopupVisible: boolean = false;
  popupTitle: string = '';
  popupMessage: string = '';
  showErrorMessage: boolean = false;

  constructor(  public userService:UserService,   public route: Router,public eventSere:EventService) {}

  register(form: NgForm) {
    if (form.invalid) {
      this.showErrorMessage = true;
    } else {
      this.showErrorMessage = false;
       
    
    const newUser: User = {
      Gmail: this.email,
      Fname: this.userName,
      Pass: this.password 
    };
    
    this.userService.addUser(newUser).subscribe(
      (response) => {
        console.log('User added successfully:', response);
        this.userService.currentuser.Fname=newUser.Fname
        this.userService.currentuser.Gmail=newUser.Gmail
        this.userService.isDirectedFromRegister=true;
        this.eventSere.eventData=[]
        this.showPopup('הושלם','נרשמת בהצלחה')

      },
      (error) => {
        this.errorMessage = ' קרתה שגיאה נסה שוב מאוחר יותר';
        console.error('Error adding user:', error);
      }
    );}
}
showPopup(title: string, message: string) {
  this.popupTitle = title;
  this.popupMessage = message;
  this.isPopupVisible = true;
}

closePopup() {

  this.isPopupVisible = false;
  this.route.navigate(['/home'])
}

}