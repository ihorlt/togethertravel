import { Component, OnInit } from '@angular/core';
import { RouteService } from 'src/app/services/route.service.service';
import { Route } from 'src/app/models/Route';

@Component({
  selector: 'tt-route-list',
  templateUrl: './route-list.component.html',
  styleUrls: ['./route-list.component.css']
})
export class RouteListComponent implements OnInit {

  routes : Route[];

  constructor(private routeService : RouteService) { }

  ngOnInit() {
      this.routeService.getRoutes().subscribe(routes => this.routes = routes);
  }
}
