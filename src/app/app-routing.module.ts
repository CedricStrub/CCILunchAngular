import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  { path: 'accueil', loadChildren: () => import('./accueil/accueil.module').then(m => m.AccueilModule)},
  { path: 'menujour', loadChildren: () => import('./menu-jour/menu-jour.module').then(m => m.MenuJourModule)},
  { path: 'menusemaine', loadChildren: () => import('./menu-semaine/menu-semaine.module').then(m => m.MenuSemaineModule)},
  { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)},
  { path: 'social', loadChildren: () => import('./social/social.module').then(m => m.SocialModule)},
  { path: 'worker', loadChildren: () => import('./worker/worker.module').then(m => m.WorkerModule)},
  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }