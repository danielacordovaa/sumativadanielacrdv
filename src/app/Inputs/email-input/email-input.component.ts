import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';  // Importa CommonModule

@Component({

  selector: 'app-email-input',

  standalone: true,

  imports: [FormsModule, CommonModule],

  templateUrl: './email-input.component.html',  

  styleUrls: ['./email-input.component.css'],  
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
