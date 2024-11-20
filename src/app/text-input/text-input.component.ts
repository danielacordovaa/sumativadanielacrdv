import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Importar FormsModule
import { CommonModule } from '@angular/common';  

@Component({
  selector: 'app-text-input',
  standalone: true,
  imports: [FormsModule, CommonModule], // Asegúrate de incluir FormsModule
  template: `
    <div>
      <label for="text">Texto:</label>
      <input
        type="text"
        id="text"
        [(ngModel)]="text"
        (input)="validarTexto()"
        placeholder="Ingresa solo texto"
      />
      <p *ngIf="error" class="error">{{ error }}</p>
      <p>Valor de Texto: {{ text }}</p> <!-- Mostrar el valor del texto -->
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
