import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-hobbies',
  standalone: true,
  imports: [],
  templateUrl: './hobbies.component.html',
  styleUrl: './hobbies.component.scss'
})
export class HobbiesComponent {
  activeIndex = signal(0);
  activities = [
    { title: 'Badminton', icon: '🏸', description: 'Nothing clears the mind after a long day of debugging quite like a fast-paced, competitive game of badminton on the court.' },
    { title: 'Video Games', icon: '🎮', description: 'A lifelong gamer. Whether I am grinding through RPGs, strategizing, or playing co-op, it is my favorite way to unwind.' },
    { title: 'Traveling & Riding', icon: '🏍️', description: 'Passionate about hitting the open road. I am a big fan of motorcycles and love traveling to explore new places and cultures.' },
    { title: 'Culinary Experiments', icon: '🍗', description: 'A passionate home chef who loves experimenting with bold flavors. Whether I am slow-cooking a rich, mouth-watering Chicken Curry or perfecting my signature late-night Maggi recipes, the kitchen is my creative outlet.' },
    { title: 'Binge-Watching', icon: '🍿', description: 'Always down for a great web series. My absolute favorites are the ones that perfectly blend crime investigation, comedy, and romance.' }
  ];
  activeActivity = computed(() => this.activities[this.activeIndex()]);

  setActive(index: number) {
    this.activeIndex.set(index);
  }
}
