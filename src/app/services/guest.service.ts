import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Guest } from '../models/guest.model';
@Injectable({
  providedIn: 'root'
})
export class GuestService {
  private apiUrl = 'http://localhost:3000/api/guests'; // Update with your API endpoint

  constructor(private http: HttpClient) {}

  getGuestsByEvent(eventId: number): Observable<Guest[]> {
    return this.http.get<Guest[]>(`${this.apiUrl}/event/${eventId}`);
  }

  addGuestToEvent(eventId: number, guest: Guest): Observable<Guest> {
    return this.http.post<Guest>(`${this.apiUrl}/event/${eventId}`, guest);
  }
}
