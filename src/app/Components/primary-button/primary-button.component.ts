import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-primary-button',
  standalone: true,
  templateUrl: './primary-button.component.html',
  styleUrls: ['./primary-button.component.css'],
})
export class PrimaryButtonComponent {
  @Output() onClick: EventEmitter<string> = new EventEmitter<string>();
  
  disabled: boolean = false; // Asegúrate de definir esta propiedad
  label: string = 'Botón Primario'; // Asegúrate de definir esta propiedad

  emitirEvento() {
    this.onClick.emit('Botón Primario presionado');
  }
}