import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-secondary-button',
  standalone: true,
  imports: [],
  templateUrl: './secondary-button.component.html',  // Actualiza aquí
  styleUrls: ['./secondary-button.component.css'],   // Actualiza aquí
})

export class SecondaryButtonComponent {
  @Output() onClick = new EventEmitter<string>();

  emitirEvento() {
    this.onClick.emit('Botón Secundario presionado');
  }
}
