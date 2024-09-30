import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  // Hardcoded login credentials
  private readonly validEmail: string = 'admin@store.com';
  private readonly validPassword: string = 'admin123';

  constructor(private router: Router) {}

  onLogin(): void {
    if (this.email === this.validEmail && this.password === this.validPassword) {
      this.router.navigate(['/home']);
    } else {
      alert('Invalid email or password. Please try again.');
    }
  }
}
