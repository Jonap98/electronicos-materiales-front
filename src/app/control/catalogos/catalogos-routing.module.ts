import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DispositivosPageComponent } from './pages/dispositivos-page/dispositivos-page.component';
import { ModelosPageComponent } from './pages/modelos-page/modelos-page.component';
import { ChecklistPageComponent } from './pages/checklist/checklist-page/checklist-page.component';
import { AuthGuard } from 'src/app/auth/guards/auth.guard';
import { PublicGuard } from 'src/app/auth/guards/public.guard';

const routes: Routes = [
  {
    path: 'dispositivos',
    component: DispositivosPageComponent,
    canActivate: [ AuthGuard ],
    canMatch: [ AuthGuard ]
  },
  {
    path: 'modelos',
    component: ModelosPageComponent,
    canActivate: [ AuthGuard ],
    canMatch: [ AuthGuard ]
  },
  {
    path: 'checklist',
    component: ChecklistPageComponent,
    canActivate: [ PublicGuard ],
    canMatch: [ PublicGuard ]
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
