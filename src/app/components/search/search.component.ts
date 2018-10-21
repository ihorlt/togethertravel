import { Component, OnInit } from '@angular/core';
import { BackendApiService } from 'src/app/services/backend-api.service';

@Component({
  selector: 'tt-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  public complexity: any;
  public duration: any;
  
  constructor(
    public backendApiService: BackendApiService
  ) {}

  ngOnInit() {
    this.backendApiService.complexity
    .subscribe( res => this.complexity = res);
    this.backendApiService.duration
    .subscribe( res => this.duration = res);
  }

}
