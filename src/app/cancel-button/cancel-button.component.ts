import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cancel-button',
  standalone: true,
  template: `<button (click)="onCancelClick()">Cancelar</button>`,
  styles: [
    `
      button {
        background-color: #f44336; /* Color rojo */
        color: white;
        padding: 10px 20px;
        border: none;
        cursor: pointer;
        font-size: 16px;
      }
    `,
  ],
})
export class CancelButtonComponent {
  @Output() onClick = new EventEmitter<void>();

  // Método que se ejecuta cuando se hace clic en el botón Cancelar
  onCancelClick() {
    this.onClick.emit();  // Emitir el evento para que se cierre la ventana
  }
}
