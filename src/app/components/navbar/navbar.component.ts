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
}
