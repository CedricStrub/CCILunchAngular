import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AccueilRoutingModule } from './accueil-routing.module';
import { MainComponent } from './components/main/main.component';
import { SuggestionComponent } from './components/suggestion/suggestion.component';
import { RouterLink } from '@angular/router';


@NgModule({
  declarations: [
    MainComponent,
    SuggestionComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    AccueilRoutingModule,
    RouterLink
  ],
  exports: [
    MainComponent,
    SuggestionComponent
  ]
})
export class AccueilModule { }
