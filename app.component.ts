import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'proyecto2';
  art={
    codigo:0,
    descripcion:"",
    precio:0
  }

  articulos = [{codigo:1, descripcion:"papas", precio:30},
               {codigo:2, descripcion:"manzanas", precio:120},
               {codigo:3, descripcion:"cebollas", precio:260},
               {codigo:4, descripcion:"melon", precio:120},
               {codigo:5, descripcion:"calabaza", precio:97},
              ];

  hayRegistros(){
    return this.articulos.length>0;
  }

  borrar (codigo:number){
    for (let x=0;x<this.articulos.length; x++)
    if (this.articulos[x].codigo==codigo)
  }
}
