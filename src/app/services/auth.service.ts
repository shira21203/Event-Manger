import { Injectable, NgZone } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
 import { User } from '../models/User.modal'; // Your user model
import { UserService } from './user.service';


 @Injectable({
  providedIn: 'root'
})
export class AuthService {

   
  constructor(
    
  ) {}

  // Sign in with email/password
  
}