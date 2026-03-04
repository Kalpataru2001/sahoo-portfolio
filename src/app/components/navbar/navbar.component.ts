import { afterNextRender, Component, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit{
  isDarkMode = signal(true);

  constructor() {
    afterNextRender(() => {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme === 'light') {
        this.isDarkMode.set(false);
        document.body.classList.add('light-theme');
      }
    });
  }

  ngOnInit(): void {}

  toggleTheme() {
    this.isDarkMode.update(current => !current);
    
    if (this.isDarkMode()) {
      document.body.classList.remove('light-theme');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.add('light-theme');
      localStorage.setItem('theme', 'light');
    }
  }
  scrollTo(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      // Offset by 80px so the navbar doesn't cover the section title!
      const y = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: y, behavior: 'smooth' });
      
      // If you have a variable that controls your mobile menu, set it to false here!
      // this.isMenuOpen = false; 
    }
  }
}
