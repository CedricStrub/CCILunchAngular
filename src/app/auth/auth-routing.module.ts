import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { CompteComponent } from './components/compte/compte.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'compte', component: CompteComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }