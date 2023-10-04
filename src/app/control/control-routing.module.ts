import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VerResponsivasPageComponent } from './responsivas/pages/ver-responsivas-page/ver-responsivas-page.component';
import { VerDetallesPageComponent } from './responsivas/pages/ver-detalles-page/ver-detalles-page.component';
import { LayoutPageComponent } from './layout-page/layout-page.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutPageComponent,
    children: [
      {
        path: 'catalogos',
        loadChildren: () => import('./catalogos/catalogos.module').then( m => m.CatalogosModule )
      },
      {
        path: 'responsivas',
        loadChildren: () => import('./responsivas/responsivas.module').then( m => m.ResponsivasModule )
      },
      // {
      //   path: 'responsivas',
      //   component: VerResponsivasPageComponent
      // },
      // {
      //   path: 'detalles',
      //   component: VerDetallesPageComponent
      // },
      {
        path: '**',
        redirectTo: 'catalogos'
      },
      // {
      //   path: '',
      //   redirectTo: 'catalogos'
      // },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ControlRoutingModule { }
