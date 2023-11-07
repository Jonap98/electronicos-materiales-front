import { Component, OnInit } from '@angular/core';
import { Modelo } from '../../interfaces/modelo.interface';
import { ModelosService } from '../../services/modelos.service';

@Component({
  selector: 'app-modelos-page',
  templateUrl: './modelos-page.component.html',
  styleUrls: ['./modelos-page.component.css']
})
export class ModelosPageComponent implements OnInit {

  public isAuthenticated: boolean = false;
  public isActive: boolean = false;
  public snackbarMessage: string = '';

  public modelos: Modelo[] = [];

  constructor(
    private modelosService: ModelosService
  ) {}

  ngOnInit(): void {
    this.modelosService.getModelos().subscribe(
      resp => this.modelos = resp.data
    );
  }

  registrarModelo() {
    this.isActive = true;
  }

  regModelo( modelo: any ) {
    this.modelosService.registrarModelo(modelo).subscribe(
      resp => {
        this.launchSnackbar( resp.msg );

        this.modelos.unshift( resp.data );
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
