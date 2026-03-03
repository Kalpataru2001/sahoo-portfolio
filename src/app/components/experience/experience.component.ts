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
  jobs = [
    {
      title: 'Junior Software Engineer',
      company: 'Kalpita Technology',
      date: 'July 2024 - Present',
      duties: [
        'Leading development on the CRM project and NFP MyDeferral platform.',
        'Building secure, streamlined digital processing applications using ASP.NET, Angular, SQL, and Azure.',
        'Improving data acquisition and administrative operations for banking and insurance clients.'
      ]
    },
    {
      title: 'Intern',
      company: 'Celebal Technology',
      date: 'May 2023 - July 2023',
      duties: [
        'Achieved Gold Batch Recognition for exceptional internship performance.'
      ]
    }
  ];

  // Your technical skills matrix
  skills = [
    { category: 'Frontend', items: ['Angular 19', 'JavaScript', 'HTML5', 'CSS3/SCSS'] },
    { category: 'Backend', items: ['ASP.NET', 'C#', 'Java'] },
    { category: 'Cloud & DB', items: ['Azure CI/CD', 'SQL Server', 'MySQL', 'Docker'] },
    { category: 'Tools', items: ['Git/GitHub', 'Postman', 'SSMS', 'UI Path'] }
  ];
}
