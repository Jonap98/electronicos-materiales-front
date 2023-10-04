import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';

import { CatalogosRoutingModule } from './catalogos-routing.module';
import { DispositivosPageComponent } from './pages/dispositivos-page/dispositivos-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RegistrarDispositivoComponent } from './components/registrar-dispositivo/registrar-dispositivo.component';
import { CalendarModule } from 'primeng/calendar';


@NgModule({
  declarations: [
    DispositivosPageComponent,
    RegistrarDispositivoComponent
  ],
  imports: [
    CommonModule,
    CatalogosRoutingModule,
    ReactiveFormsModule,
    TableModule,
    ButtonModule,
    CalendarModule
  ]
})
export class CatalogosModule { }
