import { CommonModule } from '@angular/common';
import { Component, computed, signal } from '@angular/core';
import { TiltDirective } from '../../directives/tilt.directive';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, TiltDirective],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  filters = ['All', 'Fullstack', 'Frontend', 'Backend'];
  activeFilter = signal('All');
  projects = [
     {
      title: 'NFP Platform & CRM',
      description: 'Developed robust CRM systems and secure digital platforms (MyDeferral/BOLI) for employee benefits and wealth management.',
      tech: ['ASP.NET', 'Angular', 'SQL Server', 'Azure'],
      github: '#', 
      liveUrl: '',
      category: 'Fullstack' 
    },
    {
      title: 'AI Document Parser',
      description: 'An artificial intelligence tool designed to parse and extract structured data from complex documents automatically.',
      tech: ['Python/AI', 'Backend framework'],
      github: '#', // Enterprise project - no public repo
      liveUrl: '',
      category: 'Backend' 
    },
    {
      title: 'Adventure',
      description: 'A comprehensive application featuring a connected backend, frontend, robust infrastructure, background jobs, and shared components.',
      tech: ['TypeScript', 'Fullstack', 'Infrastructure'],
      github: 'https://github.com/Kalpataru2001/Adventure',
      liveUrl: 'https://adventure-ecru.vercel.app/auth/login',
      category: 'Fullstack' 
    },
    {
      title: 'Live Chat Demo',
      description: 'A real-time chatting application allowing users to communicate seamlessly with live typing indicators.',
      tech: ['JavaScript', 'Real-time Web', 'Frontend'],
      github: 'https://github.com/Kalpataru2001/livechat-demo',
      liveUrl: 'https://livechat-demo-one.vercel.app/',
      category: 'Frontend' 
    },
    {
      title: 'Sweet Shop Platform',
      description: 'An e-commerce platform built with a separated architecture, featuring an HTML frontend and a robust C# API backend.',
      tech: ['HTML/CSS', 'C#', '.NET API'],
      github: 'https://github.com/Kalpataru2001/sweet-shop', 
      liveUrl: 'https://sweets-shop-dev.netlify.app/',
      category: 'Fullstack' 
    },
    {
      title: 'AgriSellandBuy',
      description: 'A web application connecting farmers and dealers. Integrated Google Maps for secure, location-based buying and selling of agricultural products.',
      tech: ['JavaScript', 'HTML/CSS', 'MySQL', 'Google Maps API'],
      github: 'https://github.com/Kalpataru2001/AgriSellandBuy', 
      liveUrl: '',
      category: 'Fullstack' 
    }
   
  ];
  filteredProjects = computed(() => {
    const filter = this.activeFilter();
    if (filter === 'All') {
      return this.projects;
    }
    return this.projects.filter(p => p.category === filter);
  });

  setFilter(filter: string) {
    this.activeFilter.set(filter);
  }
}
