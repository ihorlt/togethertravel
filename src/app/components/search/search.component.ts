import { Component, OnInit, OnDestroy } from '@angular/core';
import { BackendApiService } from 'src/app/services/backend-api.service';
import { TranslateService } from 'src/app/services/translate.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'tt-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit, OnDestroy {

  private ngUnsubscribe = new Subject();

  public complexity: any[] = [];
  public duration: any[] = [];
  public location: any[] = [];

  constructor(
    public backendApiService: BackendApiService,
    public tsrv: TranslateService
  ) {}

  ngOnInit() {
    this.backendApiService.getapi('Complexity')
    .pipe(takeUntil(this.ngUnsubscribe))
    .subscribe( res => this.complexity = res);
    this.backendApiService.getapi('Duration')
    .pipe(takeUntil(this.ngUnsubscribe))
    .subscribe( res => this.duration = res);
    this.backendApiService.getapi('Location')
    .pipe(takeUntil(this.ngUnsubscribe))
    .subscribe( res => this.location = res);
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
}

}
