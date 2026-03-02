import { afterNextRender, Component, ElementRef, HostListener, NgZone, ViewChild } from '@angular/core';

@Component({
  selector: 'app-particles',
  standalone: true,
  imports: [],
  template: '<canvas #canvas></canvas>',
  styleUrls: ['./particles.component.scss']
})
export class ParticlesComponent {
  @ViewChild('canvas', { static: true }) canvasRef!: ElementRef<HTMLCanvasElement>;
  
  private ctx!: CanvasRenderingContext2D;
  private particlesArray: any[] = [];
  private mouse = { x: -1000, y: -1000, radius: 150 }; // Mouse area of effect
  private animationFrameId!: number;

  constructor(private ngZone: NgZone) {
    // Ensures this only runs in the browser, not during Server-Side Rendering
    afterNextRender(() => {
      this.initCanvas();
    });
  }

  @HostListener('window:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    this.mouse.x = event.x;
    this.mouse.y = event.y;
  }

  // When mouse leaves window, move the interaction area off-screen
  @HostListener('window:mouseout')
  onMouseOut() {
    this.mouse.x = -1000;
    this.mouse.y = -1000;
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.setCanvasSize();
    this.initParticles(); // Recreate particles to fit new screen size
  }

  private initCanvas() {
    const canvas = this.canvasRef.nativeElement;
    this.ctx = canvas.getContext('2d')!;
    this.setCanvasSize();
    this.initParticles();

    // Run animation outside Angular zone for maximum performance
    this.ngZone.runOutsideAngular(() => {
      this.animate();
    });
  }

  private setCanvasSize() {
    const canvas = this.canvasRef.nativeElement;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  private initParticles() {
    this.particlesArray = [];
    // Amount of particles based on screen size
    let numberOfParticles = (window.innerWidth * window.innerHeight) / 9000; 

    for (let i = 0; i < numberOfParticles; i++) {
      let size = (Math.random() * 2) + 1;
      let x = Math.random() * (window.innerWidth - size * 2) + size;
      let y = Math.random() * (window.innerHeight - size * 2) + size;
      let speedX = (Math.random() * 1) - 0.5;
      let speedY = (Math.random() * 1) - 0.5;
      
      this.particlesArray.push({ x, y, speedX, speedY, size });
    }
  }

  private animate = () => {
    const canvas = this.canvasRef.nativeElement;
    this.ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < this.particlesArray.length; i++) {
      let p = this.particlesArray[i];

      // Update position
      p.x += p.speedX;
      p.y += p.speedY;

      // Bounce off edges
      if (p.x > canvas.width || p.x < 0) p.speedX = -p.speedX;
      if (p.y > canvas.height || p.y < 0) p.speedY = -p.speedY;

      // Draw the particle
      this.ctx.beginPath();
      this.ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      this.ctx.fillStyle = 'rgba(0, 229, 255, 0.5)'; // Your Electric Cyan theme color
      this.ctx.fill();

      // Connect particles to each other and to the mouse
      for (let j = i; j < this.particlesArray.length; j++) {
        let p2 = this.particlesArray[j];
        let dx = p.x - p2.x;
        let dy = p.y - p2.y;
        let distance = Math.sqrt(dx * dx + dy * dy);

        // If particles are close, draw a line
        if (distance < 100) {
          this.ctx.beginPath();
          this.ctx.strokeStyle = `rgba(0, 229, 255, ${1 - distance/100})`; // Fades out as they get further
          this.ctx.lineWidth = 0.5;
          this.ctx.moveTo(p.x, p.y);
          this.ctx.lineTo(p2.x, p2.y);
          this.ctx.stroke();
        }
      }

      // Mouse interaction (particles connect to your mouse)
      let dxMouse = p.x - this.mouse.x;
      let dyMouse = p.y - this.mouse.y;
      let distanceMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);

      if (distanceMouse < this.mouse.radius) {
        this.ctx.beginPath();
        this.ctx.strokeStyle = `rgba(0, 229, 255, ${1 - distanceMouse/this.mouse.radius})`;
        this.ctx.lineWidth = 1;
        this.ctx.moveTo(p.x, p.y);
        this.ctx.lineTo(this.mouse.x, this.mouse.y);
        this.ctx.stroke();
      }
    }

    this.animationFrameId = requestAnimationFrame(this.animate);
  }
}
