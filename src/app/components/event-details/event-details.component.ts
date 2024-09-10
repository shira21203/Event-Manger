import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Guest } from 'src/app/models/guest.model';
import { EventService } from 'src/app/services/event.service';
import { GuestService } from 'src/app/services/guest.service';
import { Event } from 'src/app/models/Event';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.scss']
})
export class EventDetailsComponent {
 
  guests: Guest[] = [];
  totalPeople: number = 0;
  totalInvitations: number = 0;
  totalArrivalConfirmed: number = 0;
  event:any

  constructor(private route: ActivatedRoute,public router:Router, public  eventService: EventService,public guestServe:GuestService) {}

  ngOnInit(): void {   this.route.queryParams.subscribe(params => {
    const eventParam = params['event'];
    if (eventParam) {
      this.event = JSON.parse(eventParam);
      this.eventService.currentEvent.EventCode= this.event.EventCode;
      this.eventService.currentEvent.EventLocation=this.event.EventLocation
      this.eventService.currentEvent.EventDate=this.event.EventDate
      this.eventService.currentEvent.EventName=this.event.EventName

     
      // Fetch guests or other details based on this.event
    } else {
      // Handle missing event data
      console.error('No event data found');
    }
  });

    // Fetch the event and guest details based on the event code
    this.getGuestsByEventCode( this.eventService.currentEvent.EventCode);}
    
    calculateSummary() {
      this.totalPeople = this.guests.reduce((acc, guest) => acc + (guest.NumPeople ?? 0), 0);
      this.totalInvitations = this.guests.filter(guest => guest.InvitationSent).length;
      this.totalArrivalConfirmed = this.guests.filter(guest => guest.ArrivalConfirmed).length;
    }
    getGuestsByEventCode(EventCode: string) {
      this.guestServe.getGuestsByEventCode( this.eventService.currentEvent.EventCode).subscribe((data) => {
        debugger
        this.guests = data; 
        this.calculateSummary()  
      });
    }
    goToHome() {
      this.router.navigate(['/home']);
    }


  addGuest() {
    this.router.navigate( [ "/add-guest"]);
  }}