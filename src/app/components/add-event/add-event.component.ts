import { Component } from '@angular/core';
 import { Router } from '@angular/router';
import { Event } from 'src/app/models/Event';
import { EventService } from 'src/app/services/event.service';
import { UserService } from 'src/app/services/user.service';
 import { PopupComponent } from '../popup/popup.component';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.scss']
})
export class AddEventComponent {
  eventName: string = '';
  eventDate: string = '';
  eventLocation: string = '';
  showErrorMessage: boolean = false;

 
  isPopupVisible: boolean = false;
  popupTitle: string = '';
  popupMessage: string = '';
  constructor( private eventService: EventService,public popup: PopupComponent, public route: Router,public userServe:UserService) {}

  createEvent(form: NgForm) {
    if (form.invalid) {
      this.showErrorMessage = true;
    } else {
      this.showErrorMessage = false;
        if (this.eventName && this.eventDate && this.eventLocation) {
      // Create a new event object
 debugger
      const newEvent = {
        EventCode: this.generateEventCode(),
        EventName: this.eventName,
        EventDate: new Date(this.eventDate),
        EventLocation: this.eventLocation,
        Gmail: this.userServe.currentuser.Gmail, // Assuming you have a method to get the logged-in user's code
      };

     this.eventService.addEvent(newEvent).subscribe(
      (response)=>
      {
        console.log('event added successfully:', response);
        this.showPopup('הושלם', 'האירוע נוסף בהצלחה.');

        // window.alert("האירוע נוסף בהצלחה");
        
      },
      (error)=>
        {
          
          console.error('add event error:', error);
       }
       
       )
        
    }
    }
   
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
 

  // Utility method to generate a random event code
  generateEventCode(): string {
    return Math.random().toString(36).substring(2, 15);
  }

  
}
