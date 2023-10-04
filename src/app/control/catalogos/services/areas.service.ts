import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environments } from 'src/environments/environments';
import { Observable } from 'rxjs';
import { Dispositivo } from '../interfaces/dispositivo.interface';
import { Modelo } from '../interfaces/modelo.interface';
import { Area } from '../interfaces/area.interface';

@Injectable({
  providedIn: 'root'
})
export class AreasService {

  public urlBase = environments.urlBase;

  public areas: Area[] = [];

  constructor(
    private http: HttpClient
  ) { }

  getAreas(): Observable<any> {
    return this.http.get(`${ this.urlBase }/catalogos/areas`);
  }

}
