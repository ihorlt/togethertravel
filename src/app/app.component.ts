import { Component } from '@angular/core';
import { TranslateService } from './services/translate.service';

@Component({
  selector: 'tt-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'togethertravel';

  constructor(
    public tsrv: TranslateService
  ) {
    tsrv.lang = 'ua';
  }
}
