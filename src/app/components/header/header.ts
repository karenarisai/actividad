import { Component, signal } from '@angular/core';
import { RouterLink } from "@angular/router";
import { AuthService } from '../../services/auth-service';
import { inject } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  menuOpen = signal(false);
  authService = inject(AuthService);

  toggleMenu() {
    this.menuOpen.update(open => !open);
  }

  logout() {
    this.authService.logout();
  }
}
