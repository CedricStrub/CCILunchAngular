import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuJourComponent } from './components/menu-jour/menu-jour.component';

const routes: Routes = [
  { path: '', component: MenuJourComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class MenuJourRoutingModule { }