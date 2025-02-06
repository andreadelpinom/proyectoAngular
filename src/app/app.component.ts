import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContactoComponent } from './shared/contacto/contacto.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,ContactoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'proyectoAngular';
}
