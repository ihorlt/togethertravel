import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

/**
 * Tu use proxy
 * ng serve --proxy-config=proxy.conf.json
 */
@Injectable({
  providedIn: 'root'
})
export class BackendApiService {
  
  constructor(
    private http: HttpClient
  ) { }

  get complexity(): any {
    return this.http.get('/api/Complexity');
  }
  get duration(): any {
    return this.http.get('/api/Duration');
  }

}
