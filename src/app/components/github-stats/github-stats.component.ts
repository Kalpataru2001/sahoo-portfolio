import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-github-stats',
  standalone: true,
  imports: [],
  templateUrl: './github-stats.component.html',
  styleUrl: './github-stats.component.scss'
})
export class GithubStatsComponent implements OnInit{
  private http = inject(HttpClient);
  
  profileData = signal<any>(null);
  isLoading = signal(true);

  username = 'Kalpataru2001'; 

  ngOnInit() {
    this.http.get(`https://api.github.com/users/${this.username}`).subscribe({
      next: (data) => {
        this.profileData.set(data);
        this.isLoading.set(false);
      },
      error: (err) => {
        console.error('Failed to fetch GitHub data', err);
        this.isLoading.set(false); 
      }
    });
  }
}
