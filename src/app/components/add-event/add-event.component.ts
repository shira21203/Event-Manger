import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Event } from 'src/app/models/event.model';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.scss']
})
export class AddEventComponent {
  event: Event = {
    event_id: 0,
    event_name: '',
    event_date: new Date(),
    location: ''
  };

  constructor(private eventService: EventService, private router: Router) {}

  onSubmit(): void {
    this.eventService.addEvent(this.event).subscribe(() => {
      this.router.navigate(['/events']);
    });
  }
}
