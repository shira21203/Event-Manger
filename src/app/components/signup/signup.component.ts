 import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  email!: string;
  password!: string;

  constructor(private authService: AuthService) {}

  async signUp(): Promise<void> {
    try {
      await this.authService.signUpWithEmail(this.email, this.password);
    } catch (error) {
      // Handle sign-up errors
      console.error('Sign-up component error', error);
    }
  }
}
