import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css'],
})
export class LandingComponent implements OnInit {
  routerChanged: string = '';
  constructor() {}

  ngOnInit() {}

  renderCurrentRoute(route: string) {
    this.routerChanged = route;
    setTimeout(() => {
      this.routerChanged = '';
    }, 1000);
  }
}
