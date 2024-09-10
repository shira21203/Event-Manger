import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Guest } from '../models/guest.model';
@Injectable({
  providedIn: 'root'
})
export class GuestService {
  private apiUrl = 'https://localhost:44336/api/guests'; // Update with your backend API endpoint

  constructor(private http: HttpClient) { }

  // Method to get guests by event code
  getGuestsByEventCode(eventCode: string): Observable<Guest[]> {
    const url = `${this.apiUrl}/GetGuestsEventCode/${eventCode}`;
    return this.http.post<Guest[]>(url, {});
  }

  // Method to add a guest
  addGuest(guest: Guest): Observable<string> {
    const url = `${this.apiUrl}/AddGuest`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return this.http.post<string>(url, guest, { headers });
  }
}
