import { NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CaptchaService } from '../../../service/captcha-service';

@Component({
  selector: 'app-cap1',
  imports: [FormsModule, NgIf],
  templateUrl: './cap1.html',
  styleUrl: './cap1.css',
})
export class Cap1 {
  isCorrect: boolean | null = null;
  userAnswer: string = '';
  private captchaState = inject(CaptchaService)

  checkAnswer() {
    console.log('User answer:', this.userAnswer);
    const correctAnswer = '17';
    this.isCorrect = this.userAnswer === correctAnswer;
  }
  nextlevel() {
    this.captchaState.setLevel(this.captchaState.getLevel() + 1);
  }
}
