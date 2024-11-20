import { Component } from '@angular/core';

@Component({
  selector: 'app-visualizer',
  standalone: true,
  templateUrl: 'visualizer.component.html',
  styleUrls: ['visualizer.component.css'],
})
export class VisualizerComponent {
  email: string = '';
  password: string = '';
  text: string = '';
}
