import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {
  githubUrl = 'https://github.com/Kalpataru2001?tab=repositories';
  linkedinUrl = 'https://www.linkedin.com/in/kalpatarusahoo';
  leetcodeUrl = 'https://leetcode.com/u/Kalpataru_sahoo/';
  hackerrankUrl = 'https://www.hackerrank.com/profile/kalpatarusahoo91';
}
