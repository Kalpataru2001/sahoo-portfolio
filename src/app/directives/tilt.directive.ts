import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appTilt]',
  standalone: true
})
export class TiltDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    const rect = this.el.nativeElement.getBoundingClientRect();
    const x = event.clientX - rect.left; // X position inside the element
    const y = event.clientY - rect.top;  // Y position inside the element

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Calculate rotation (max 10 degrees)
    const rotateX = ((y - centerY) / centerY) * -10; 
    const rotateY = ((x - centerX) / centerX) * 10;

    this.renderer.setStyle(this.el.nativeElement, 'transform', `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`);
    this.renderer.setStyle(this.el.nativeElement, 'transition', 'transform 0.1s ease-out');
    this.renderer.setStyle(this.el.nativeElement, 'will-change', 'transform');
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    // Snap back to normal when the mouse leaves
    this.renderer.setStyle(this.el.nativeElement, 'transform', `perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)`);
    this.renderer.setStyle(this.el.nativeElement, 'transition', 'transform 0.5s ease-out');
  }
}