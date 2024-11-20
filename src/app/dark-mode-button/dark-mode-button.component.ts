import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dark-mode-button',
  standalone: true,
  template: `
    <button (click)="activarModoOscuro()">Modo Oscuro</button>
  `,
  styles: [
    `
      button {
        padding: 10px 20px;
        background-color: #343a40;
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        font-size: 16px;
      }
      button:hover {
        background-color: #23272b;
      }
    `,
  ],
})
export class DarkModeButtonComponent {
  @Output() onToggleDarkMode = new EventEmitter<void>();

  activarModoOscuro() {
    this.onToggleDarkMode.emit();
  }
}
