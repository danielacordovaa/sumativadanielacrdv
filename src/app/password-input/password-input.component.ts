import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';  // Importar CommonModule para usar *ngIf
import { FormsModule } from '@angular/forms';  // Asegúrate de importar FormsModule también

@Component({
  selector: 'app-password-input',
  standalone: true,
  imports: [CommonModule, FormsModule],  // Asegúrate de importar CommonModule aquí
  template: `
    <div>
      <label for="password">Contraseña:</label>
      <input
        type="password"
        id="password"
        [(ngModel)]="password"
        (input)="validarPassword()"
        placeholder="Ingresa tu contraseña"
      />
      <p *ngIf="error" class="error">{{ error }}</p>
      <p>Contraseña: {{ password }}</p> <!-- Mostrar el valor del texto -->
    </div>
  `,
  styles: [
    `
      div {
        display: flex;
        flex-direction: column;
        margin: 10px 0;
      }
      label {
        font-weight: bold;
        margin-bottom: 5px;
      }
      input {
        padding: 8px;
        font-size: 14px;
        border: 1px solid #ccc;
        border-radius: 4px;
      }
      .error {
        color: red;
        font-size: 12px;
        margin-top: 5px;
      }
    `,
  ],
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
