import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Login } from './pages/login/login';
import { Dashboard } from './pages/dashboard/dashboard';

@Component({
  imports: [RouterOutlet, Login, Dashboard],
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


