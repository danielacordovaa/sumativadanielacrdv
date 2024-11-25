import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-accept-button',
  standalone: true,
  templateUrl: './accept-button.component.html', // Cambia aquí
  styleUrls: ['./accept-button.component.css'], // Cambia aquí
})
export class AcceptButtonComponent {
  @Output() onClick = new EventEmitter<void>();

  onAcceptClick() {
    this.onClick.emit();  // Emitir el evento cuando el botón es presionado
  }
}