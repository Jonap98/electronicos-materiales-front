import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DispositivosPageComponent } from './pages/dispositivos-page/dispositivos-page.component';

const routes: Routes = [
  {
    path: 'dispositivos',
    component: DispositivosPageComponent
  },
  {
    path: '**',
    redirectTo: 'dispositivos'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CatalogosRoutingModule { }
