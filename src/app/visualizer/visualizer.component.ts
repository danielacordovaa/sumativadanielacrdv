import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';  // Asegúrate de importar FormsModule

@Component({
  selector: 'app-visualizer',
  standalone: true,
  imports: [FormsModule],  // Asegúrate de incluir FormsModule aquí
  templateUrl: './visualizer.component.html',
  styleUrls: ['./visualizer.component.css'],
})
export class VisualizerComponent {
  email: string = '';
  password: string = '';
  text: string = '';
}