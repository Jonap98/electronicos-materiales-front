import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';

import { CatalogosRoutingModule } from './catalogos-routing.module';
import { DispositivosPageComponent } from './pages/dispositivos-page/dispositivos-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RegistrarDispositivoComponent } from './components/registrar-dispositivo/registrar-dispositivo.component';
import { CalendarModule } from 'primeng/calendar';
import { ModelosPageComponent } from './pages/modelos-page/modelos-page.component';
import { RegistrarModeloComponent } from './components/modelos/registrar-modelo/registrar-modelo.component';
import { ResponsivasPageComponent } from './pages/responsivas-page/responsivas-page.component';
import { ChecklistPageComponent } from './pages/checklist/checklist-page/checklist-page.component';
import { RegistrarChecklistComponent } from './pages/checklist/registrar-checklist/registrar-checklist.component';
import { DialogModule } from 'primeng/dialog';
import { RadioButtonModule } from 'primeng/radiobutton';
import { RatingModule } from 'primeng/rating';
import { AutoCompleteModule } from 'primeng/autocomplete';


@NgModule({
  declarations: [
    DispositivosPageComponent,
    RegistrarDispositivoComponent,
    ModelosPageComponent,
    RegistrarModeloComponent,
    ResponsivasPageComponent,
    ChecklistPageComponent,
    RegistrarChecklistComponent,
  ],
  imports: [
    CommonModule,
    CatalogosRoutingModule,
    ReactiveFormsModule,
    TableModule,
    ButtonModule,
    CalendarModule,
    DialogModule,
    RadioButtonModule,
    RatingModule,
    AutoCompleteModule,
  ]
})
export class CatalogosModule { }
