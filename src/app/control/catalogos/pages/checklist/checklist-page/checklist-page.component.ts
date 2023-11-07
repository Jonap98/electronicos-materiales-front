import { Component, OnInit } from '@angular/core';
import { Modelo } from '../../../interfaces/modelo.interface';
import { Router } from '@angular/router';
import { ChecklistService } from '../../../services/checklist.service';
import { Checklist } from '../../../interfaces/checklist.interface';


@Component({
  selector: 'app-checklist-page',
  templateUrl: './checklist-page.component.html',
  styleUrls: ['./checklist-page.component.css']
})
export class ChecklistPageComponent implements OnInit {

  public isAuthenticated: boolean = false;
  public isActive: boolean = false;
  public snackbarMessage: string = '';

  public checklists: Checklist[] = [];

  constructor(
    private router: Router,
    private checklistService: ChecklistService
  ) {}

  ngOnInit(): void {
    this.checklistService.getChecklists().subscribe( resp => {
      this.checklists = resp.data;
    });
  }


  registrarChecklist( checklist: any ): void {
    this.checklistService.registrarChecklist(
      checklist.asset_name,
      checklist.status_enciende,
      checklist.status_pantalla,
      checklist.status_partes_funcionamiento,
      checklist.status_partes_faltantes,
      checklist.status_general,
      checklist.descripcion_problema,
     ).subscribe( resp => {
       this.launchSnackbar( resp.msg );

       this.checklists.unshift(resp.data);

      this.visible = false;

     });

  }

  value: number = 5;

  visible: boolean = false;

  showDialog() {
    this.visible = true;
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
