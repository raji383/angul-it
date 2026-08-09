import { Component, inject, signal } from '@angular/core';
import { CaptchaService } from '../../../service/captcha-service';
import { ReactiveFormsModule, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-cap2',
  imports: [ReactiveFormsModule],
  templateUrl: './cap2.html',
  styleUrl: './cap2.css',
})
export class Cap2 {
  image = signal<string[]>([])
  private captchaState = inject(CaptchaService);
  isCorrect: boolean | null = null;

  form = new FormGroup({
    option1: new FormControl(false),
    option2: new FormControl(false),
    option3: new FormControl(false),
    option4: new FormControl(false)
  });

  ngOnInit() {
    this.image.set(['captcha1.png', 'captcha2.png', 'captcha3.png', 'images.png'])
  }
  checkAnswer() {
    const correctAnswer = ['option4'];

    this.isCorrect = this.image().every((_, index) => {
      const option = `option${index + 1}`;
      const selected = this.form.get(option)?.value;

      return selected === correctAnswer.includes(option);
    });
  }
  nextlevel() {
    this.captchaState.setLevel(this.captchaState.getLevel() + 1);
  }
}
