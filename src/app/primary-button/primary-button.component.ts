import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-primary-button',
  standalone: true,
  template: `
    <button (click)="emitirEvento()">Botón Primario</button>
  `,
  styles: [
    `
      button {
        background-color: #007bff;
        color: white;
        padding: 10px 20px;
        border: none;
        border-radius: 5px;
        cursor: pointer;
      }
      button:hover {
        background-color: #0056b3;
      }
    `,
  ],
})
export class PrimaryButtonComponent {
  @Output() onClick: EventEmitter<string> = new EventEmitter<string>();

  // Emitir el evento cuando se hace clic
  emitirEvento() {
    this.onClick.emit('Botón Primario presionado');
  }
}
