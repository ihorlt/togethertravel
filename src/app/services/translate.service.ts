import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ReplaySubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';


const BASE_URL = 'assets/lang/';

/**
 * Use a file for translate from English keys to any other lang
 */
@Injectable({
  providedIn: 'root'
})
export class TranslateService {

    private _file$ = new ReplaySubject<object>(1);
  
  constructor(
    private http: HttpClient
  ) {
  }

  t(key): Observable<string> {
    return this._file$.pipe(
        map(res => <string>res[key.toLowerCase().trim()])
        );
  }

  set lang(lang: string) {
      this.http.get(BASE_URL + lang + '.json' )
      .subscribe( res => this._file$.next(res));
  }

}
