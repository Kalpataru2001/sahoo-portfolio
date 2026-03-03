import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-loader',
  standalone: true,
  imports: [],
  templateUrl: './loader.component.html',
  styleUrl: './loader.component.scss'
})
export class LoaderComponent {
  isFading = signal(false);
  isHidden = signal(false);

  ngOnInit() {
    setTimeout(() => {
      this.isFading.set(true);
    }, 2000);

    setTimeout(() => {
      this.isHidden.set(true);
    }, 2500);
  }
}
