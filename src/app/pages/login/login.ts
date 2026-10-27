
import { Component, output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-login',
  styleUrl: './login.css',
  templateUrl: './login.html',
})
export class Login {
  loginSuccess = output<void>();
  email = '';
  password = '';

  errorMessage = '';
  successMessage = '';

  login(): void {
    this.errorMessage = '';
    this.successMessage = '';

    if (
      this.email === 'admin@incidencias.es' &&
      this.password === 'Admin123'
    ) {
      this.successMessage = '¡Acceso correcto! Bienvenido al panel.';
      this.loginSuccess.emit();
    } else {
      this.errorMessage = 'Correo electrónico o contraseña incorrectos.';
    }
  }
}
