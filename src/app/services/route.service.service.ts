import { Injectable } from '@angular/core';
import { BackendApiService } from './backend-api.service';
import { Observable } from 'rxjs';
import { Route } from '../models/Route';

@Injectable({
  providedIn: 'root'
})
export class RouteService {
  constructor(private api : BackendApiService ) { 

  }

  getRoutes() : Observable<Route[]>{
    return this.api.getapi("/Route");
  }
}
