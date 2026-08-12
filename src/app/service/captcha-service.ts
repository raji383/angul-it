import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';


export interface CaptchaState {
  currentStage: number;
  completedStages: number[];
  score: number;
  completed: boolean;
}
@Injectable({
  providedIn: 'root',
})
export class CaptchaService {
  private readonly STORAGE_KEY = 'captcha-state';
  private router = inject(Router);

  private state: CaptchaState = {
    currentStage: 1,
    completedStages: [],
    score: 0,
    completed: false
  };
  saveState(): void {
    localStorage.setItem(
      this.STORAGE_KEY,
      JSON.stringify(this.state)
    );
  }
  setLevel(level: number) {
    if (!this.state.completedStages.includes(level - 1)) {

      this.state.completedStages.push(level - 1);
    }
    if (level < 1 || level > 4) {
      return;
    }
    this.state.score = (level-1) * 10;
    this.state.currentStage = level;
    if (this.state.completedStages.length === 4) {
      console.log(this.state.completedStages);
      this.state.completed = true;
    }
    this.saveState();

  }

  getLevel() {
    try {

      const savedState = localStorage.getItem(this.STORAGE_KEY);

      if (savedState) {
        this.state = JSON.parse(savedState);
      } else {
        this.router.navigateByUrl("/home")

      }
      if (!(typeof this.state.completed === 'boolean' && typeof this.state.score === 'number' && Array.isArray(this.state.completedStages) && typeof this.state.currentStage === 'number')) {
        this.router.navigateByUrl("/home")
      }
      if (this.state.currentStage < 1 || this.state.currentStage > 4) {
        this.restart();
      }
    } catch (error) {
      this.router.navigateByUrl("/home")
      return 0;
    }
    return this.state.currentStage;
  }
  getState() {
    return this.state;
  }
  restart() {
    this.state = {
      currentStage: 1,
      completedStages: [0],
      score: 0,
      completed: false
    };
    this.saveState();
  }
  isdone() {
    if (this.state.completedStages.includes(1) && this.state.completedStages.includes(2) && this.state.completedStages.includes(3)) {
      return true;
    }
    return false;
  }
  getcompletedStages() {
    var c = 0;
    if (this.state.completedStages.includes(1)) {
      c++;
    }
    if (this.state.completedStages.includes(2)) {
      c++;
    }
    if (this.state.completedStages.includes(3)) {
      c++;
    }
    return c;
  }
}
