import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then( m => m.AuthModule ),
    // canActivate: [ PublicGuard ],
    // canMatch: [ PublicGuard ]
  },
  {
    path: 'control',
    loadChildren: () => import('./control/control.module').then( m => m.ControlModule )
  },
  // {
  //   path: '404',
  //   component: Error404PageComponent
  // },
  {
    path: '',
    redirectTo: 'control',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '404',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
