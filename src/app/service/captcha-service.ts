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
    this.state.completedStages.push(level);
    if (level < 1 || level > 3) {
      return;
    }
    this.state.score += 10;
    this.state.currentStage = level;
    if (this.state.completedStages.length === 3) {
      this.state.completed = true;
    }
    this.saveState();

  }

  getLevel() {
    const savedState = localStorage.getItem(this.STORAGE_KEY);

    if (savedState) {
      this.state = JSON.parse(savedState);
    } else {
      this.router.navigateByUrl("/home")

    }
    if (this.state.currentStage < 1 || this.state.currentStage > 3) {
      this.restart();
    }
    return this.state.currentStage;
  }
  getState() {
    return this.state;
  }
  restart() {
    this.state = {
      currentStage: 1,
      completedStages: [],
      score: 0,
      completed: false
    };
    this.saveState();
  }
  isdone() {
    return this.state.completedStages.length === 4;
  }
}
