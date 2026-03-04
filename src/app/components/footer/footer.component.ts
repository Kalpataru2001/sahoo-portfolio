import { Component, HostListener, signal } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  currentYear = new Date().getFullYear(); 
  
  githubUrl = 'https://github.com/Kalpataru2001?tab=repositories';
  linkedinUrl = 'https://www.linkedin.com/in/kalpatarusahoo';

  showRocket = signal(false);

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.showRocket.set(window.scrollY > 400);
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}