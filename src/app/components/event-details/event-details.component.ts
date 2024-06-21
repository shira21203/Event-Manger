import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Guest } from 'src/app/models/guest.model';
import { EventService } from 'src/app/services/event.service';
import { GuestService } from 'src/app/services/guest.service';
import { Event } from 'src/app/models/event.model';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.scss']
})
export class EventDetailsComponent {
  event!: Event;
  guests!: Guest[];
  eventId!: number;

  constructor(
    private route: ActivatedRoute,
    private eventService: EventService,
    private guestService: GuestService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.eventId = +!params.get('eventId');
      this.getEventDetails();
      this.getGuests();
    });
  }

  getEventDetails(): void {
    this.eventService.getEventById(this.eventId)
      .subscribe((event: Event) => {
        this.event = event;
      });
  }

  getGuests(): void {
    this.guestService.getGuestsByEventId(this.eventId)
      .subscribe((guests: Guest[]) => {
        this.guests = guests;
      });
  }

  onGuestAdded(guest: Guest): void {
    // Update guest list after adding a new guest
    this.guests.push(guest);
  }
}
