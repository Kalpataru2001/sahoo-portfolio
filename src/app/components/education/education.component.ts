import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './education.component.html',
  styleUrl: './education.component.scss'
})
export class EducationComponent {
  educationList = [
    {
      degree: 'Java Full Stack Training',
      institution: 'Jspiders Training & Development Center, Marathahalli, Bengaluru',
      year: '',
      score: '',
      certificateUrl: 'jspider.jpg'
    },
    {
      degree: 'Master of Computer Applications (MCA)',
      institution: 'Kalinga Institute of Industrial Technology, Bhubaneswar',
      year: '2022 - 2024',
      score: 'CGPA: 8.75',
      certificateUrl: '' 
    },
    {
      degree: 'B.Sc. Degree',
      institution: 'Dr. H.K Mahatab Degree College, Kupari, Balasore',
      year: '2018 - 2021',
      score: 'CGPA: 7.36',
      certificateUrl: '' 
    }
  ];

  certifications = [
    { 
      name: 'Microsoft AZ-204 Certification (Azure)', 
      url: 'https://learn.microsoft.com/en-us/users/kalpataru-5950/credentials/8bce4b4f57890e46' // Add your Azure URL here!
    },
    { 
      name: '5 Stars in Java (HackerRank)', 
      url: 'https://www.hackerrank.com/profile/kalpatarusahoo91' 
    },
    { 
      name: '5 Stars in SQL (HackerRank)', 
      url: 'https://www.hackerrank.com/profile/kalpatarusahoo91' 
    },
    { 
      name: 'Web development', 
      url: 'https://drive.google.com/file/d/1kvn0DA203GAJJcwbi28vYo5CtahfLgav/view' 
    }
  ];
}
