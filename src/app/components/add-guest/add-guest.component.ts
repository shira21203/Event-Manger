import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Guest } from 'src/app/models/guest.model';
import { GuestService } from 'src/app/services/guest.service';

@Component({
  selector: 'app-add-guest',
  templateUrl: './add-guest.component.html',
  styleUrls: ['./add-guest.component.scss']
})
export class AddGuestComponent {
  guest: Guest = {
    guest_id: 0,
    guest_name: '',
    guest_email: ''
  };
  eventId: number;

  constructor(private guestService: GuestService, private route: ActivatedRoute, private router: Router) {
    this.eventId = +!this.route.snapshot.paramMap.get('id');
  }

  onSubmit(): void {
    this.guestService.addGuestToEvent(this.eventId, this.guest).subscribe(() => {
      this.router.navigate([`/events/${this.eventId}/guests`]);
    });
  }
}
