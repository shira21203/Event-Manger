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
  newGuest: Guest = {
    event_id: 0, // Initialize as needed
    name: '',
    closeness_type: null,
    phone_number: null,
    email_address: null,
    order_sent: false,
    arrival_confirmed: false,
    guest_count: null
  };

  constructor(private guestService: GuestService) { }

  ngOnInit(): void {
    // Initialize component if needed
  }

  onSubmit(): void {
    this.guestService.addGuest(this.newGuest)
      .subscribe((guest: Guest) => {
        console.log('Guest added:', guest);
        // Optionally, navigate to another page or refresh guest list
      });
  }
}
