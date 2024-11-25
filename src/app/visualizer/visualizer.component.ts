import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';  // Asegúrate de importar FormsModule
import { CommonModule } from '@angular/common';  // Importa CommonModule


@Component({
  selector: 'app-visualizer',
  standalone: true,
  imports: [FormsModule, CommonModule],  // Asegúrate de incluir FormsModule aquí
  templateUrl: './visualizer.component.html',
  styleUrls: ['./visualizer.component.css'],
})
export class VisualizerComponent {
  email: string = '';
  password: string = '';
  text: string = '';
}
