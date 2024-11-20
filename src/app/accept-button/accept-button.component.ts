import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-accept-button',
  standalone: true,
  template: `<button (click)="onAcceptClick()">Aceptar</button>`,
  styles: [
    `
      button {
        background-color: #4CAF50;
        color: white;
        padding: 10px 20px;
        border: none;
        cursor: pointer;
        font-size: 16px;
      }
    `,
  ],
})
export class AcceptButtonComponent {
  @Output() onClick = new EventEmitter<void>();

  onAcceptClick() {
    this.onClick.emit();  // Emitir el evento cuando el botón es presionado
  }
}
