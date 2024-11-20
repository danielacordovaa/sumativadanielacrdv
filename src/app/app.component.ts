import { Component } from '@angular/core';
import { PrimaryButtonComponent } from './primary-button/primary-button.component';
import { SecondaryButtonComponent } from './secondary-button/secondary-button.component';
import { AcceptButtonComponent } from './accept-button/accept-button.component';
import { CancelButtonComponent } from './cancel-button/cancel-button.component';
import { DarkModeButtonComponent } from './dark-mode-button/dark-mode-button.component';
import { VisualizerComponent } from './visualizer/visualizer.component';
import { PasswordInputComponent } from './password-input/password-input.component';
import { EmailInputComponent } from './email-input/email-input.component'; 
import { FormsModule } from '@angular/forms';
import { TextInputComponent } from './text-input/text-input.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    FormsModule,
    PrimaryButtonComponent,
    TextInputComponent ,
    SecondaryButtonComponent,
    AcceptButtonComponent,
    CancelButtonComponent,
    DarkModeButtonComponent,
    VisualizerComponent,
    PasswordInputComponent,
    EmailInputComponent,
    
     // Asegúrate de importar el PasswordInputComponent
  ],
  templateUrl: './app.component.html', 
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  isPinkTheme = false;
  isDarkMode = false;
  password: string = '';
  email: string = '';
  text: string = '';
  visualizerData = { email: '', password: '', text: '' };

  // Método para actualizar el visualizador con un mensaje
  actualizarVisualizador(mensaje: string) {
    const visualizerElement = document.querySelector('app-visualizer') as any;
    if (visualizerElement) {
      visualizerElement.componentInstance.actualizarMensaje(mensaje);
    }
  }
  togglePinkTheme() {
    this.isPinkTheme = !this.isPinkTheme;

    // Añadir o quitar la clase CSS dependiendo del estado
    if (this.isPinkTheme) {
      document.body.classList.add('pink-theme');
    } else {
      document.body.classList.remove('pink-theme');
    }
  }
  aplicarAnimacion() {
    // Añadir la clase 'animado' para activar la animación
    document.body.classList.add('animado');

    // Quitar la clase después de un tiempo para que la animación pueda repetirse
    setTimeout(() => {
      document.body.classList.remove('animado');
    }, 5000); // Duración total de la animación
  }
  guardarDatos() {
    console.log('Datos guardados:', { email: this.email, password: this.password, text: this.text });
  }
  onCancelClick() {
    // Intentar cerrar la ventana
    window.close();  // Esto solo funcionará si la página fue abierta mediante JavaScript
  }
  

  // Método para cambiar el tema de la aplicación a modo oscuro
  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
    const body = document.body;

    if (this.isDarkMode) {
      body.style.backgroundColor = '#121212';
      body.style.color = '#ffffff';
    } else {
      body.style.backgroundColor = '#ffffff';
      body.style.color = '#000000';
    }
  }
}
