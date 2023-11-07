import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environments } from 'src/environments/environments';
import { Observable, tap } from 'rxjs';
import { Dispositivo } from '../interfaces/dispositivo.interface';

@Injectable({
  providedIn: 'root'
})
export class DispositivosService {

  public urlBase = environments.urlBase;

  public dispositivos: Dispositivo[] = [];

  constructor(
    private http: HttpClient
  ) { }

  getDispositivos(): Observable<any> {
    return this.http.get(`${ this.urlBase }/catalogos/dispositivos`);
  }

  getAssetNames(): Observable<any> {
    return this.http.get(`${ this.urlBase }/catalogos/dispositivos/assetnames`);
  }

  registrarDispositivo( data: object ): Observable<any> {
    return this.http.post(`${ this.urlBase }/catalogos/dispositivos/store`, data);
  }
}
