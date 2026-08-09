import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-cap3',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './cap3.html',
  styleUrl: './cap3.css',
})
export class Cap3 {
  char = "123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  text = ""
  isCorrect: boolean | null = null;
  form = new FormGroup({
    userAnswer: new FormControl('')
  });
  checkAnswer() {
    const answer = this.form.get('userAnswer')?.value;

    this.isCorrect = answer === this.text;
  }

  ngOnInit() {
    this.text = "";
    for (let i = 0; i < 6; i++) {
      this.text += this.char.charAt(Math.floor(Math.random() * this.char.length));
    }
    var canva = document.createElement("canvas");
    canva.id = "canvas";
    canva.width = 200;
    canva.height = 50;
    var ctx = canva.getContext("2d");
    if (ctx) {
      ctx.font = "30px Arial";
      ctx.strokeText(this.text, 10, 35);
      document.getElementById("captcha")?.appendChild(canva);
    }
  }
}
