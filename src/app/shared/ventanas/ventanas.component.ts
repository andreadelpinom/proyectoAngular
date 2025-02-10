import { Component } from '@angular/core';
import { Foto } from '../../interfaz/foto';
import { RecursosService } from '../../servicios/recursos.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-ventanas',
  imports: [HttpClientModule],
  providers: [RecursosService],
  templateUrl: './ventanas.component.html',
  styleUrl: './ventanas.component.css'

})


export class VentanasComponent {
  fotos: Foto[] = [];
  constructor(private recursosService: RecursosService){
    recursosService.obtenerDatos().subscribe(respuesta => {
      this.fotos = respuesta as Array<Foto>
    })
  }

  medios:any[]=[
    {
      "ventanaTexto": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet eleifend velit. Nulla accumsan felis et ligula tincidunt, in auctor metus elementum.",
      "boton1": "Ver",
      "boton2": "Revisar",
      "minutos": "6min"
    },

    {
      "ventanaTexto": "Pellentesque tincidunt massa ac molestie aliquet. Morbi accumsan ac nisi mollis posuere.",
      "boton1": "Explorar",
      "boton2": "Reservar",
      "minutos": "10min"
    },

    {
      "ventanaTexto": "Morbi placerat maximus convallis. Nunc ac est vitae purus blandit dictum non quis augue.",
      "boton1": "Presionar",
      "boton2": "Guardar",
      "minutos": "7min"
    },

    {
      "ventanaTexto": "Sed a luctus urna. Sed efficitur neque enim. Duis ante nunc, sagittis et pulvinar ac, efficitur eu sapien.",
      "boton1": "Ver",
      "boton2": "Guardar",
      "minutos": "8min"
    },

    {
      "ventanaTexto": "Vivamus suscipit convallis urna et tincidunt. Nam lobortis massa et neque dignissim vehicula. Sed vitae est velit.",
      "boton1": "Suscribir",
      "boton2": "Pagar",
      "minutos": "3min"
    },

    {
      "ventanaTexto": "Proin venenatis aliquam pharetra. In feugiat lacinia risus, eu commodo diam lobortis id. Ut vel quam ac metus venenatis sollicitudin.",
      "boton1": "Reservar",
      "boton2": "Pagar",
      "minutos": "10min"
    },

    {
      "ventanaTexto": "Nullam pulvinar elit et augue congue elementum. Maecenas feugiat imperdiet interdum. Proin consequat congue risus. Donec luctus fermentum nulla.",
      "boton1": "Pedir",
      "boton2": "Editar",
      "minutos": "13min"
    },

    {
      "ventanaTexto": "Maecenas laoreet nunc mi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id erat bibendum, fermentum nunc ac, ullamcorper mi.",
      "boton1": "View",
      "boton2": "Edit",
      "minutos": "14min"
    },

    {
      "ventanaTexto": "Nullam feugiat mollis nisl a semper. Sed consectetur convallis massa, ullamcorper imperdiet sem. Etiam nec euismod velit.",
      "boton1": "Unir",
      "boton2": "Salir",
      "minutos": "17min"
    },

  ]

}