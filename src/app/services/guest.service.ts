import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Guest } from '../models/guest.model';
@Injectable({
  providedIn: 'root'
})
export class GuestService {
  private apiUrl = 'http://localhost:3000/api/guests'; // Update with your backend API endpoint

  constructor(private http: HttpClient) { }

  getGuestsByEventId(eventId: number): Observable<Guest[]> {
    return this.http.get<Guest[]>(`${this.apiUrl}/event/${eventId}`);
  }

  addGuest(guest: Guest): Observable<Guest> {
    return this.http.post<Guest>(this.apiUrl, guest);
  }

  updateGuest(guest: Guest): Observable<Guest> {
    return this.http.put<Guest>(`${this.apiUrl}/${guest.guest_id}`, guest);
  }

  deleteGuest(guestId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${guestId}`);
  }
}
