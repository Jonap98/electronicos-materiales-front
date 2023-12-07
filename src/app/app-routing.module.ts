import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublicGuard } from './auth/guards/public.guard';
import { AuthGuard } from './auth/guards/auth.guard';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then( m => m.AuthModule ),
    canActivate: [ PublicGuard ],
    canMatch: [ PublicGuard ]
  },
  {
    path: 'control',
    loadChildren: () => import('./control/control.module').then( m => m.ControlModule ),
    // canActivate: [ AuthGuard ],
    // canMatch: [ AuthGuard ]
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
