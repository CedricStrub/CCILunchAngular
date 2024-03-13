import { Component, OnInit } from '@angular/core';
import { Acceuil } from '../../models/accueil.model';
import { AccueilService } from '../../services/acceuil.service';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

  acceuilData!: Acceuil[];

  constructor(private dataService: AccueilService) {}

  ngOnInit() {
    this.dataService.getAcceuilData().subscribe(data => {
      this.acceuilData = data;
    });
  }

}
