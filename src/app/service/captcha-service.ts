import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CaptchaService {
  private level = 1;

  setLevel(level: number) {
    this.level = level;
  }

  getLevel() {
    return this.level;
  }
}
