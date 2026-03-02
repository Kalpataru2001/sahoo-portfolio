import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  email = 'kalpatarusahoo953@gmail.com'; 
  isSubmitting = false;
  successMessage = '';
  errorMessage = '';

  async onSubmit(event: Event) {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const data = new FormData(form);

    this.isSubmitting = true;
    this.successMessage = '';
    this.errorMessage = '';

    try {
      const response = await fetch('https://formspree.io/f/xqedvzop', {
        method: 'POST',
        body: data,
        headers: { 'Accept': 'application/json' }
      });

      if (response.ok) {
        this.successMessage = 'Message sent successfully! I will get back to you soon.';
        form.reset();
      } else {
        this.errorMessage = 'Oops! There was a problem submitting your form.';
      }
    } catch (error) {
      this.errorMessage = 'Network error. Please try again later or email me directly.';
    }

    this.isSubmitting = false;
    setTimeout(() => {
      this.successMessage = '';
      this.errorMessage = '';
    }, 6000);
  }
}
