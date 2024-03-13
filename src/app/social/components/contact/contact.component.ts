import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { SocialService } from '../../services/social.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  contactForm: FormGroup;

  constructor(private fb: FormBuilder, private socialService: SocialService, private router: Router) {
    this.contactForm = this.fb.group({
      prenom: [null, Validators.required],
      nom: [null, Validators.required],
      email: [null, Validators.required],
      message: [null, Validators.required],
    });
  }

  onSubmit(): void {
    if (this.contactForm.valid) {
      this.socialService.sendContactData(this.contactForm.value).subscribe({
        next: (response) => this.router.navigateByUrl('/accueil'),
        error: (error) => console.error(error)
      });
    }
  }

}
