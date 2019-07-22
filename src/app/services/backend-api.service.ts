import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const BASE_URL = 'http://localhost:33807/api/';
//const BASE_URL = 'https://dev-api-recreationassistant.azurewebsites.net/api/';

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

  getapi(uri): any {
    return this.http.get(BASE_URL + uri);
  }

}
