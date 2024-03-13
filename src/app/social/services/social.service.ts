import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Contact } from '../models/contact.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SocialService {
  private apiUrl = 'https://localhost:9081/api/Social'; // Your API endpoint

  constructor(private http: HttpClient) { }

  sendContactData(contactData: Contact): Observable<any> {
    return this.http.post(this.apiUrl, contactData);
  }
}
