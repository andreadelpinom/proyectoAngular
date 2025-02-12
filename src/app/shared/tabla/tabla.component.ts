import { Component } from '@angular/core';
import { Tabla } from '../../interfaz/tabla';
import { RecursosService } from '../../servicios/recursos.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-tabla',
  imports: [],
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent { 
  tabla:Tabla[]=[]

  constructor(
    private service: RecursosService,
    private router: Router,
  ){
    this.service.obtenerDatosTablas().subscribe(response =>{
      this.tabla = response as Tabla[];
    })
  }

  obtenerId(id:number){
    this.router.navigate(['detalles', id])
  }
}
