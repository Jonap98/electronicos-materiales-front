import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ControlRoutingModule } from './control-routing.module';
import { LayoutPageComponent } from './layout-page/layout-page.component';


@NgModule({
  declarations: [
    LayoutPageComponent
  ],
  imports: [
    CommonModule,
    ControlRoutingModule
  ]
})
export class ControlModule { }
