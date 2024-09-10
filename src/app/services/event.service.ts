import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Event } from 'src/app/models/Event';
import { GetEventsByGmailRequest } from '../models/GetEventsByGmailRequest';


@Injectable({
  providedIn: 'root'
})
export class EventService {
 eventData?:Event[]=[]
isEvent:boolean=false;
currentEvent:Event= new Event("","",new Date,"","");

  private apiUrl = 'https://localhost:44336/api/events';  // Replace with your actual API URL

  constructor(private http: HttpClient) {}

    // Get events by Gmail
 // Method to get events by Gmail
  getEventsByGmail(gmail: string): Observable<Event[]> {
    const url = `${this.apiUrl}/GetEventsByGmail`;
    const body = { GMAIL: gmail };
    return this.http.post<Event[]>(url, body);
  }

  // getEventsByGmail(gmail: string): Promise<Event[]|undefined> {
  //   debugger
  //   const url = `${this.apiUrl}/GetEventsByGmail`;
  //   const body = { GMAIL: gmail };
  //   // Convert Observable to Promise
  //   return this.http.post<Event[]>(url, body).toPromise();
  // }
   // Add new event
   addEvent(newEvent: Event): Observable<string> {
    return this.http.post<string>(`${this.apiUrl}/AddEvent`, newEvent, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }
  
  // Get event by EventCode
  getEventByEventCode(eventCode: string): Observable<Event> {
    return this.http.get<Event>(`${this.apiUrl}/GetEventByEventCode/${eventCode}`);
  }
}
