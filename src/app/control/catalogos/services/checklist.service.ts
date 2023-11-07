import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environments } from 'src/environments/environments';

@Injectable({
  providedIn: 'root'
})
export class ChecklistService {

  public urlBase = environments.urlBase;

  constructor(
    private http: HttpClient
  ) { }

  getChecklists(): Observable<any> {
    return this.http.get(`${this.urlBase}/checklist`);
  }

  registrarChecklist(
    asset_name: string,
    status_enciende: number,
    status_pantalla: number,
    status_partes_funcionamiento: number,
    status_partes_faltantes: number,
    status_general: number,
    descripcion_problema : number,
  ): Observable<any> {

    const data = {
      asset_name,
      status_enciende,
      status_pantalla,
      status_partes_funcionamiento,
      status_partes_faltantes,
      status_general,
      descripcion_problema,
    };

    return this.http.post(`${this.urlBase}/checklist/store`, data);

  }
}
