import { Component, HostListener, signal } from '@angular/core';

@Component({
  selector: 'app-scroll-progress',
  standalone: true,
  imports: [],
  templateUrl: './scroll-progress.component.html',
  styleUrl: './scroll-progress.component.scss'
})
export class ScrollProgressComponent {
  progress = signal(0);

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    
    const docHeight = document.documentElement.scrollHeight;
    
    const winHeight = document.documentElement.clientHeight;
    
    const scrollPercent = (scrollTop / (docHeight - winHeight)) * 100;
    
    this.progress.set(scrollPercent);
  }
}
