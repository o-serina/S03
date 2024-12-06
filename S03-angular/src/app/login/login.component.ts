// src/app/login/login.component.ts

import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router'; // Import Router

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router // Inject Router
  ) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onLogin(): void {
    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.value.username, this.loginForm.value.password)
        .subscribe({
          next: (response) => {
            console.log('Login successful', response);
            if (response.token) {
              this.authService.setToken(response.token); // Store token in localStorage
              this.router.navigate(['/dashboard']); // Navigate to dashboard
            } else {
              console.error('Login failed: No token received');
            }
          },
          error: (error) => {
            console.error('Login failed', error);
          }
        });
    } else {
      console.error('Form is not valid');
    }
  }
}
