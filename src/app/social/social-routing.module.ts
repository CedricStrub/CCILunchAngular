import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './components/contact/contact.component';
import { CguComponent } from './components/cgu/cgu.component';
import { CgvComponent } from './components/cgv/cgv.component';

const routes: Routes = [
  { path: 'contact', component: ContactComponent},
  { path: 'cgu', component: CguComponent},
  { path: 'cgv', component: CgvComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class SocialRoutingModule { }