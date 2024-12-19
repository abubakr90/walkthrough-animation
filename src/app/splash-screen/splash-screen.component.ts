import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-splash-screen',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="splash-container">
      <div class="content">
        <h1>Splash Screen View</h1>
        <div class="spinner-container">
          <div class="spinner"></div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .splash-container {
      height: 100vh;
      width: 100vw;
      display: flex;
      justify-content: center;
      align-items: center;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
    }
    
    .content {
      text-align: center;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 2rem;
    }
    
    h1 {
      font-size: 2.5rem;
    }

    .spinner-container {
      display: flex;
      justify-content: center;
      width: 100%;
    }
  `]
})
export class SplashScreenComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {
    setTimeout(() => {
      this.router.navigate(['/main']);
    }, 3000);
  }
}