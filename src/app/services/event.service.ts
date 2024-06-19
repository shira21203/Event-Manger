import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Event } from 'src/app/models/event.model';


@Injectable({
  providedIn: 'root'
})
export class EventService {

  private apiUrl = 'http://localhost:3000/api/Events'; // Update with your API endpoint

  constructor(private http: HttpClient) {}

  getEvents(): Observable<Event[]> {
    return this.http.get<Event[]>(this.apiUrl);
  }

  getEventById(id: number): Observable<Event> {
    return this.http.get<Event>(`${this.apiUrl}/${id}`);
  }

  addEvent(Event: Event): Observable<Event> {
    return this.http.post<Event>(this.apiUrl, Event);
  }


  updateEvent(Event: Event): Observable<Event> {
    return this.http.put<Event>(`${this.apiUrl}/${Event.event_id}`, Event);
  }

  deleteEvent(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
