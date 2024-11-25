import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-cuadrado',
  templateUrl: './cuadrado.component.html',
  styleUrls: ['./cuadrado.component.css'],
  imports:[CommonModule],
 standalone: true,
})
export class CuadradoComponent {
  color: string = 'blue'; // Color inicial del cuadrado
  rotate: boolean = false; // Estado de rotación

  // Método para rotar el cuadrado
  rotarCuadrado() {
    this.rotate = !this.rotate; // Cambia el estado de rotación
  }

  // Método para cambiar el color del cuadrado
  cambiarColor() {
    this.color = this.color === 'blue' ? 'red' : 'blue'; // Cambia entre azul y rojo
  }
}