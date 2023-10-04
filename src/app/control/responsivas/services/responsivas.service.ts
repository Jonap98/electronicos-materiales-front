import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environments } from 'src/environments/environments';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResponsivasService {

  public urlBase: string = environments.urlBase;

  constructor(
    private http: HttpClient
  ) { }

  getResponsivas(): Observable<any> {
    return this.http.get(`${ this.urlBase }/responsivas`);
  }

}
