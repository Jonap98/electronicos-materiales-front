import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DispositivosPageComponent } from './pages/dispositivos-page/dispositivos-page.component';
import { ModelosPageComponent } from './pages/modelos-page/modelos-page.component';
import { ChecklistPageComponent } from './pages/checklist/checklist-page/checklist-page.component';

const routes: Routes = [
  {
    path: 'dispositivos',
    component: DispositivosPageComponent
  },
  {
    path: 'modelos',
    component: ModelosPageComponent
  },
  {
    path: 'checklist',
    component: ChecklistPageComponent
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
