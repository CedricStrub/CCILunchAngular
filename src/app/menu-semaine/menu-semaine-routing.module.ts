import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuSemaineComponent } from './components/menu-semaine/menu-semaine.component';

const routes: Routes = [
  { path: '', component: MenuSemaineComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenuSemaineRoutingModule { }