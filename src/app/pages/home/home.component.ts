import { Component, OnInit } from '@angular/core';
import { BackendApiService } from 'src/app/services/backend-api.service';

@Component({
  selector: 'tt-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public complexity: any;

  constructor(
    public backendApiService: BackendApiService
  ) { }

  ngOnInit() { 
    this.backendApiService.complexity
    .subscribe( res => this.complexity = res);
   }

}
