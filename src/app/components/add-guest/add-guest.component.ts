import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Guest } from 'src/app/models/guest.model';
import { EventService } from 'src/app/services/event.service';
import { GuestService } from 'src/app/services/guest.service';

@Component({
  selector: 'app-add-guest',
  templateUrl: './add-guest.component.html',
  styleUrls: ['./add-guest.component.scss']
})
export class AddGuestComponent {
  guestName: string = '';
  relationshipType: string = '';
  phone: string = '';
  email: string = '';
  numPeople: number = 1;
  eventCode: string = '';
  invitationSent:boolean=false;
  arrivalConfirmed: boolean=false;
  showErrorMessage: boolean = false;


  isPopupVisible: boolean = false;
  popupTitle: string = '';
  popupMessage: string = '';
  constructor(private guestService: GuestService,  private router: Router, private route: ActivatedRoute,public EventServ:EventService) {}

  ngOnInit(): void {
     
  }

//   createEvent() {
//     if (this.eventName && this.eventDate && this.eventLocation) {
//       // Create a new event object
//  debugger
//       const newEvent = {
//         EventCode: this.generateEventCode(),
//         EventName: this.eventName,
//         EventDate: new Date(this.eventDate),
//         EventLocation: this.eventLocation,
//         Gmail: this.userServe.currentuser.Gmail, // Assuming you have a method to get the logged-in user's code
//       };

//      this.eventService.addEvent(newEvent).subscribe(
//       (response)=>
//       {
//         console.log('event added successfully:', response);
//         this.showPopup('הושלם', 'האירוע נוסף בהצלחה.');

//         // window.alert("האירוע נוסף בהצלחה");
        
//       },
//       (error)=>
//         {
          
//           console.error('add event error:', error);
//        }
       
//        )
        
//     }
//   } 
onSubmit(form: NgForm) {
  debugger
  if (form.invalid) {
    this.showErrorMessage = true;
  } else {
    this.showErrorMessage = false;
    this.addGuest();
  }
}
 
  addGuest(): void {
    const newGuest = {
      GuestCode:this.generateGuestCode(),
      EventCode: this.EventServ.currentEvent.EventCode,
      GuestName: this.guestName,
      RelationshipType: this.relationshipType,
      Phone: this.phone,
      Email: this.email,
      InvitationSent:this.invitationSent,
      ArrivalConfirmed: this.arrivalConfirmed,
      NumPeople: this.numPeople
    };
    
    this.guestService.addGuest(newGuest).subscribe(
      (response)=>
      {
        console.log('אורח  added successfully:', response);
        this.showPopup('הושלם', 'אורח נוסף בהצלחה.');

        // window.alert("האירוע נוסף בהצלחה");
        
      },
      (error)=>
        {
          
          console.error('add event error:', error);
       }
       )
        
   
  }


  showPopup(title: string, message: string) {
    this.popupTitle = title;
    this.popupMessage = message;
    this.isPopupVisible = true;
  }

  closePopup() {

    this.isPopupVisible = false;
    this.router.navigate(['/event-detail'])
  }
  generateGuestCode()
  { 
    return  Math.floor(Math.random() * 10000);
  }
}
