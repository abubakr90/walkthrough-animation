import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-main-screen',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './main-screen.component.html',
  styleUrl: './main-screen.component.css' 
})
export class MainScreenComponent implements OnInit, OnDestroy {
  currentStep = 0;
  private intervalId: any;
  
  

    
  ngOnInit() {
    setTimeout(() => this.startWalkthrough(), 1000);
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  startWalkthrough() {
    this.currentStep = 1;
    this.intervalId = setInterval(() => {
      if (this.currentStep < 3) {
        this.currentStep++;
      } else {
        this.currentStep = 0;
        clearInterval(this.intervalId);
      }
    }, 3000);
  }

  
}