import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuJourRoutingModule } from './menu-jour-routing';
import { MenuComponent } from './components/menu/menu.component';
import { MenuJourComponent } from './components/menu-jour/menu-jour.component';
import { ReservationComponent } from './components/reservation/reservation.component';



@NgModule({
  declarations: [
    MenuJourComponent,
    MenuComponent,
    ReservationComponent
  ],
  imports: [
    CommonModule,
    MenuJourRoutingModule
  ]
})
export class MenuJourModule { }
