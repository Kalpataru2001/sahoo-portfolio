import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-custom-cursor',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="cursor-dot" [style.left.px]="mouseX" [style.top.px]="mouseY"></div>
    <div class="cursor-outline" [style.left.px]="mouseX" [style.top.px]="mouseY"></div>
  `,
  styleUrls: ['./custom-cursor.component.scss']
})
export class CustomCursorComponent {
  mouseX = -100; 
  mouseY = -100;

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    this.mouseX = event.clientX;
    this.mouseY = event.clientY;
  }
}
