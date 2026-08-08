import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-captcha-component',
  imports: [FormsModule,NgIf],
  templateUrl: './captcha-component.html',
  styleUrl: './captcha-component.css',
})
export class CaptchaComponent {
  isCorrect: boolean | null = null;
  userAnswer: string = '';
  checkAnswer() {
    console.log('User answer:', this.userAnswer);
    const correctAnswer = '17';
    this.isCorrect = this.userAnswer === correctAnswer;
  }
  nextlevel(){
    
  }
}
