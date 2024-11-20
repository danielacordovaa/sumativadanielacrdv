import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';  // Importa CommonModule

@Component({
  selector: 'app-email-input',
  standalone: true,
  imports: [FormsModule, CommonModule],  // Agrega CommonModule a imports
  template: `
    <form>
      <label for="email">Correo Electrónico:</label>
      <input
        type="email"
        id="email"
        name="email"
        [(ngModel)]="email"
        (input)="validarEmail()"
        
        placeholder="Ingresa tu correo electrónico"
      />
      <p *ngIf="error" class="error">{{ error }}</p>
      <p>Email: {{ email }}</p> <!-- Mostrar el valor del texto -->
    </form>
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
export class EmailInputComponent {
  email = '';  // Variable para almacenar el correo electrónico
  error = '';  // Variable para almacenar el mensaje de error

  // Función para validar el correo electrónico
  validarEmail() {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!this.email.match(emailPattern)) {
      this.error = 'Por favor, ingresa un correo electrónico válido.';  // Si no es válido
    } else {
      this.error = '';  // Si es válido, limpiamos el mensaje de error
    }
  }
}
