import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResponsivasRoutingModule } from './responsivas-routing.module';
import { VerResponsivasPageComponent } from './pages/ver-responsivas-page/ver-responsivas-page.component';
import { VerDetallesPageComponent } from './pages/ver-detalles-page/ver-detalles-page.component';


@NgModule({
  declarations: [
    VerResponsivasPageComponent,
    VerDetallesPageComponent
  ],
  imports: [
    CommonModule,
    ResponsivasRoutingModule
  ]
})
export class ResponsivasModule { }
