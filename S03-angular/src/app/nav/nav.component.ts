import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service'; // Make sure the path is correct

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'] // Correct the property name to styleUrls
})
export class NavComponent {

  // Remove the authService: any line; it's not needed if you inject it through the constructor

  constructor(private router: Router, private authService: AuthService) {} // Inject AuthService here

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
