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

  constructor(private guestService: GuestService, private route: ActivatedRoute) {}

  ngOnInit(): void {
  this.eventId = +!this.route.snapshot.paramMap.get('id');
    this.guestService.getGuestsByEvent(this.eventId).subscribe(guests => {
      this.guests = guests;
    });
  }
}
