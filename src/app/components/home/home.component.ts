import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from 'src/app/services/event.service';
import { UserService } from 'src/app/services/user.service';
import { Event } from 'src/app/models/Event';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  
  userName: string = '';
 

  // Hardcoded user name
  events: Event[] = []; // List to store events
isEvents:boolean=false;
  constructor(private router: Router,public eventServe :EventService,public userServe:UserService) 
  {
  }

  ngOnInit(): void {
    // Simulate user details
this.loadEvents();     
  }

loadEvents()
{

this.userName=this.userServe.currentuser.Fname

  this.eventServe.getEventsByGmail(this.userServe.currentuser.Gmail).subscribe(
    (data:any[])=>
    {
      debugger
      this.eventServe.isEvent=false
      this.eventServe.eventData=data
       this.events=this.eventServe.eventData
 

    },(error)=>
    {console.error('Error fetching events:', error)
    
    });
  debugger
  

}

GoToAdd()
{
  debugger
  this.router.navigate(["/add-event"])
}
  openEventDetails(eventId: string): void {
    this.router.navigate(['/event-details', eventId]);
  }

  OnOpenEventDetails(event: Event) {
    
    const eventJson = encodeURIComponent(JSON.stringify(event));
    this.router.navigate(['/event-detail'], 
      {
         queryParams:
          { event: JSON.stringify(event) },skipLocationChange:true });
  }
}
