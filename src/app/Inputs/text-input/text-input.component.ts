import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-text-input',
  standalone: true,
  imports: [FormsModule, CommonModule], // Asegúrate de incluir FormsModule
  templateUrl: './text-input.component.html', // Asegúrate de que esta ruta sea correcta
  styleUrls: ['./text-input.component.css'], // Asegúrate de que esta ruta sea correcta
})
export class TextInputComponent {
  text = '';  // Variable para almacenar el texto ingresado
  error = '';  // Variable para almacenar el mensaje de error

  // Función para validar que solo se ingrese texto
  validarTexto() {
    const textoPattern = /^[A-Za-z\s]*$/;  // Permite solo letras y espacios
    if (!this.text.match(textoPattern)) {
      this.error = 'Por favor, ingresa solo texto (letras y espacios).';
    } else {
      this.error = '';  // Si el texto es válido, limpia el mensaje de error
    }
  }
}