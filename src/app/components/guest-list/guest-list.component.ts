 import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Guest } from 'src/app/models/guest.model';
import { GuestService } from 'src/app/services/guest.service';
 
@Component({
  selector: 'app-guest-list',
  templateUrl: './guest-list.component.html',
  styleUrls: ['./guest-list.component.scss']
})
export class GuestListComponent {
  guests: Guest[] = [];
  eventId!: number;

  constructor(
    private guestService: GuestService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.eventId = +!params.get('eventId');
      this.getGuests();
    });
  }

  getGuests(): void {
    this.guestService.getGuestsByEventId(this.eventId)
      .subscribe((guests: Guest[]) => {
        this.guests = guests;
      });
  }

  deleteGuest(guestId: number): void {
    if (confirm('Are you sure you want to delete this guest?')) {
      this.guestService.deleteGuest(guestId)
        .subscribe(() => {
          this.getGuests(); // Refresh guest list after deletion
        });
    }
  }
}
