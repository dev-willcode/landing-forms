import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  @Input() currentRoute: string = '';
  @Output() routeChanged = new EventEmitter<string>();

  constructor() {}

  ngOnInit() {}

  changeRoute(ruta: string) {
    this.routeChanged.emit(ruta);
  }
}
