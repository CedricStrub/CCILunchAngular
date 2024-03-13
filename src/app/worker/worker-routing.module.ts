import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReservationComponent } from './components/reservation/reservation.component';
import { StockComponent } from './components/stock/stock.component';

const routes: Routes = [
  { path: 'reservation', component: ReservationComponent},
  { path: 'stock', component: StockComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorkerRoutingModule { }