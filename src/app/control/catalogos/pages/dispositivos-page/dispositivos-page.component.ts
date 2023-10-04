import { Component, OnInit } from '@angular/core';
import { Dispositivo } from '../../interfaces/dispositivo.interface';
import { DispositivosService } from '../../services/dispositivos.service';
import { AreasService } from '../../services/areas.service';
import { ModelosService } from '../../services/modelos.service';
import { Modelo } from '../../interfaces/modelo.interface';
import { Area } from '../../interfaces/area.interface';

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

  constructor(
    private dispositivosService: DispositivosService,
    private modelosService: ModelosService,
    private areasService: AreasService,
  ) {}

  ngOnInit(): void {
    this.dispositivosService.getDispositivos().subscribe(
      resp => {
        this.dispositivos = resp.data
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

}
