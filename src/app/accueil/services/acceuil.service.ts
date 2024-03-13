import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Acceuil } from '../models/accueil.model';

@Injectable({
  providedIn: 'root'
})
export class AccueilService {
  private apiUrl = 'https://localhost:9081/api/'; // Your API endpoint

  constructor(private http: HttpClient) {}

  getAcceuilData(): Observable<Acceuil[]> {
    return this.http.get<{ $values: Acceuil[] }>(this.apiUrl + "Menu/Home")
    .pipe(map(response => response.$values));
  }
}
