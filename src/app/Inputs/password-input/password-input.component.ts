import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';  // Importar CommonModule para usar *ngIf
import { FormsModule } from '@angular/forms';  // Asegúrate de importar FormsModule también

@Component({
  selector: 'app-password-input',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './password-input.component.html',  // Actualiza aquí
  styleUrls: ['./password-input.component.css'],   // Actualiza aquí
})

export class PasswordInputComponent {
  password = '';  // Asegúrate de que 'password' esté inicializado correctamente
  error = '';      // Asegúrate de que 'error' también esté inicializado

  // Función que valida la contraseña
  validarPassword() {
    if (this.password.length < 8) {
      this.error = 'La contraseña debe tener al menos 8 caracteres.';
    } else {
      this.error = '';  // Si la contraseña es válida, el error se limpia
    }
  }
}
