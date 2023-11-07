import { Component, OnInit } from '@angular/core';
import { Dispositivo } from '../../interfaces/dispositivo.interface';
import { DispositivosService } from '../../services/dispositivos.service';
import { AreasService } from '../../services/areas.service';
import { ModelosService } from '../../services/modelos.service';
import { Modelo } from '../../interfaces/modelo.interface';
import { Area } from '../../interfaces/area.interface';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-dispositivos-page',
  templateUrl: './dispositivos-page.component.html',
  styleUrls: ['./dispositivos-page.component.css']
})
export class DispositivosPageComponent implements OnInit {

  public isAuthenticated: boolean = false;
  public isActive: boolean = false;
  public snackbarMessage: string = '';

  public dispositivos: Dispositivo[] = [];
  public modelos: Modelo[] = [];
  public areas: Area[] = [];

  public today: Date = new Date();
  public todayFormatted = formatDate(this.today, 'MM/dd/yyyy', 'en-US');

  constructor(
    private dispositivosService: DispositivosService,
    private modelosService: ModelosService,
    private areasService: AreasService,
  ) {}

  ngOnInit(): void {
    this.dispositivosService.getDispositivos().subscribe(
      resp => {
        this.dispositivos = resp.data

        this.dispositivos.map( dispositivo => {

          if( dispositivo.ultimo_check ) {
            const dia = formatDate(dispositivo.ultimo_check, 'MM/dd/yyyy hh:mm', 'en-US');

            const diff = this.diferenciaEntreDiasEnDias(new Date(dia), new Date(this.todayFormatted));

            dispositivo.diferencia = diff ?? 0;
          }

        });
      }
    )

    this.modelosService.getModelos().subscribe(
      resp => this.modelos = resp.data
    );

    this.areasService.getAreas().subscribe(
      resp => this.areas = resp.data
    );

  }

  registrarDispositivo() {
    this.isActive = true;
  }

  regDispositivo( dispositivo: any ) {

    this.dispositivosService.registrarDispositivo(dispositivo).subscribe(
      resp => {
        this.launchSnackbar(resp.msg);

        this.dispositivos.unshift(resp.data);
      }
    )
  }

  public success: boolean = false;
  launchSnackbar( message: string ) {
    this.snackbarMessage = message;
    this.success = true;

    setTimeout(() => {
      this.success = false;
    }, 3000);
  }


  diferenciaEntreDiasEnDias(a: Date, b: Date): any{
    var utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
    var utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());

    const diff = utc2 - utc1;

    const difinsecs = diff / 1000;

    const diffinhours = difinsecs / 3600;

    const diffInDays = diffinhours / 24;

    return diffInDays;
  }

}
