import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent {
  skills = [
    { category: 'Frontend', items: ['Angular 19', 'JavaScript', 'HTML5', 'CSS3/SCSS'] },
    { category: 'Backend', items: ['ASP.NET', 'C#', 'Java'] },
    { category: 'Cloud & DB', items: ['Azure CI/CD', 'SQL Server', 'MySQL', 'Docker'] },
    { category: 'Tools', items: ['Git/GitHub', 'Postman', 'SSMS', 'UI Path'] }
  ];
}
