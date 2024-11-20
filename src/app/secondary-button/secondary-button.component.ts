import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-secondary-button',
  template: `<button (click)="emitirEvento()">Botón Secundario</button>`,
  standalone: true,
  styles: [
    `
      button {
        padding: 10px 20px;
        font-size: 16px;
        background-color: #f1f1f1;
        border: none;
        cursor: pointer;
      }
    `
  ],
})
export class SecondaryButtonComponent {
  @Output() onClick = new EventEmitter<string>();

  emitirEvento() {
    this.onClick.emit('Botón Secundario presionado');
  }
}
