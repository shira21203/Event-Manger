import { Injectable, NgZone } from '@angular/core';
import { User } from '../models/User.modal';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { EventService } from './event.service';
 

@Injectable({
  providedIn: 'root'
})
export class UserService {
  currentuser: User = new User("","","")
  userData: any; // Save logged in user data
  isDirectedFromRegister:boolean=false
  apiUrl: string = "https://localhost:44336/api/users"
  constructor(  private http: HttpClient, 
    public router: Router
  ,public eventServe :EventService)
  {      
 } 

 login(loginData: { Gmail: string, Password: string }): Observable<any> {
  // Sending the login data (email and password) to the API endpoint
  return this.http.post<any>(`${this.apiUrl}/Login`, loginData);
}
 // Method to get user by Gmail
 getUserByGmail(gmail: string): Observable<User> {
  const url = `${this.apiUrl}/GetUserByGmail`;
  const body = { Gmail: gmail };
  return this.http.post<User>(url, body);
}
  // Method to add a new user
  addUser(newUser: User): Observable<any> {
    const url = `${this.apiUrl}/AddUser`;
    return this.http.post(url, newUser);
  }
}
