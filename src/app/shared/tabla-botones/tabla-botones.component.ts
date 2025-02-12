import { Component } from '@angular/core';

@Component({
  selector: 'app-tabla-botones',
  imports: [],
  templateUrl: './tabla-botones.component.html',
  styleUrl: './tabla-botones.component.css'
})
export class TablaBotonesComponent {
  id:number=0;
  post: Tabla | undefined;

  constructor(
    private service: RecursosService,
    private router: ActivatedRoute
  ){
    this.router.paramMap.subscribe(params => {
      const paramId = params.get('id');
      this.id = paramId ? +paramId : 0; // Convierte el valor a número, si existe, sino asigna 0
      console.log(this.id); // Mostrar el id procesado
    });
    this.service.obtenerDetallePosts(this.id).subscribe(details =>{
      this.post = details as Tabla
    })
  }

}
