import { afterNextRender, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeroComponent } from './components/hero/hero.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ContactComponent } from './components/contact/contact.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import AOS from 'aos';
import { ParticlesComponent } from './components/particles/particles.component';

@Component({
  selector: 'app-root',
  imports: [HeroComponent,ExperienceComponent,ProjectsComponent,ContactComponent,NavbarComponent,ParticlesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'sahoo-portfolio';
  constructor() {
    afterNextRender(() => {
      AOS.init({
        duration: 800,   
        easing: 'ease-in-out', 
        once: true,     
        offset: 100     
      });
    });
  }
}
