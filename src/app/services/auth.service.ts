import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { Observable } from 'rxjs'; 
import firebase from 'firebase/compat/app';
 @Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$: Observable<any>;

  constructor(private afAuth: AngularFireAuth, private router: Router) {
    this.user$ = afAuth.authState;
  }
  async signUpWithEmail(email: string, password: string): Promise<void> {
    try {
      await this.afAuth.createUserWithEmailAndPassword(email, password);
      // Optionally, send verification email
      await this.sendVerificationEmail();
      this.router.navigate(['/login']);
    } catch (error) {
      console.error('Sign-up error', error);
      // Handle sign-up errors
      throw error; // Rethrow the error or handle as needed
    }
  }

  async sendVerificationEmail(): Promise<void> {
    try {
      const user =  this.afAuth.currentUser;
      if (!user) { 
        console.log('ddd')
      }
    } catch (error) {
      console.error('Verification email error', error);
      throw error;
    }
  }
  async login(email: string, password: string): Promise<void> {
    try {
      debugger
      await this.afAuth.signInWithEmailAndPassword(email, password);
      this.router.navigate(['/home']);
    } catch (error) {
      console.error('Login error', error);
    }
  }

  async logout(): Promise<void> {
    try {
      await this.afAuth.signOut();
      this.router.navigate(['/login']);
    } catch (error) {
      console.error('Logout error', error);
    }
  }

  isLoggedIn(): boolean {
    return !!this.afAuth.currentUser;
  }
}