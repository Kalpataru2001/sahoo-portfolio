import { afterNextRender, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeroComponent } from './components/hero/hero.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ContactComponent } from './components/contact/contact.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import AOS from 'aos';

@Component({
  selector: 'app-root',
  imports: [HeroComponent,ExperienceComponent,ProjectsComponent,ContactComponent,NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'sahoo-portfolio';
  constructor() {
    // This ensures AOS only initializes in the browser, preventing SSR errors
    afterNextRender(() => {
      AOS.init({
        duration: 800,   // How long the animation takes (in milliseconds)
        easing: 'ease-in-out', // Smooth transition
        once: true,      // Animation happens only once while scrolling down
        offset: 100      // Triggers animation slightly before the element hits the screen
      });
    });
  }
}
