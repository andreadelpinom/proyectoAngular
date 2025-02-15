import { Component } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { ContactoComponent } from './shared/contacto/contacto.component';
import { AlbumComponent } from './shared/album/album.component';
import { VentanasComponent } from './shared/ventanas/ventanas.component';
import { RecursosService } from './servicios/recursos.service';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './shared/footer/footer.component';
import { Foto } from './interfaz/foto';
import { TablaComponent } from './shared/tabla/tabla.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule, ContactoComponent, AlbumComponent, VentanasComponent, HttpClientModule, FooterComponent, TablaComponent],
  providers: [RecursosService], //se lo pone como proveedor porque es un servicio.
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})


export class AppComponent {
  title = 'proyectoAngular';
  fotos: Foto[] = [];
  constructor(private recursosService: RecursosService){
    recursosService.obtenerDatos().subscribe(respuesta => {
      this.fotos = respuesta as Array<Foto>
    } )
  }
}
