import { Component } from '@angular/core';

@Component({
  selector: 'app-album',
  imports: [],
  templateUrl: './album.component.html',
  styleUrl: './album.component.css'
})
export class AlbumComponent {
  titulo:string="Album"
  contexto:string="Vestibulum lorem turpis, lobortis in gravida in, aliquet vel eros. Nam ut dolor pretium, pharetra erat eget, sodales arcu. Proin semper mattis enim, a sollicitudin sapien dapibus accumsan. Ut eleifend finibus nunc sodales ullamcorper. Integer luctus a massa quis luctus. In faucibus ligula non gravida tempus. Mauris suscipit ultricies turpis vitae vehicula."
  boton1:string="Main"
  boton2:string="Boton 2"
}