import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environments } from 'src/environments/environments';
import { Observable } from 'rxjs';
import { Dispositivo } from '../interfaces/dispositivo.interface';
import { Modelo } from '../interfaces/modelo.interface';

@Injectable({
  providedIn: 'root'
})
export class ModelosService {

  public urlBase = environments.urlBase;

  public modelos: Modelo[] = [];

  constructor(
    private http: HttpClient
  ) { }

  getModelos(): Observable<any> {
    return this.http.get(`${ this.urlBase }/catalogos/modelos`);
  }

  registrarModelo( data: object ): Observable<any> {
    return this.http.post(`${ this.urlBase }/catalogos/modelos/store`, data);
  }

}
