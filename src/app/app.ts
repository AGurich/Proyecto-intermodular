import { Component } from '@angular/core';
import { Login } from './pages/login/login';
import { Dashboard } from './pages/dashboard/dashboard';

@Component({
  imports: [Login, Dashboard],
  standalone: true,
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  loggedIn = false;
  logout(): void {
    this.loggedIn = false;
  }
}


