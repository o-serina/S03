import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent {

  constructor(private router: Router) {}

  logout() {
    // Assuming you have a service to handle authentication states
    // this.authService.logout();
    this.router.navigate(['/login']);
  }
}
