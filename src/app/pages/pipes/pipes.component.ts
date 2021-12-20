import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css'],
})
export class PipesComponent implements OnInit {
  nombre = 'Nombre de ejemplo';
  moneda = 5.874;
  cantidad = 1.98787874;
  porcentaje = 0.754;
  fecha = new Date();
  emoji = 'U+1F354';
  obj = {
    nombre: 'hola',
    saludo: 'que tal',
  };

  constructor() {}

  ngOnInit() {}
}
