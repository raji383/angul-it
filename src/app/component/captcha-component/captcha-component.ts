import { NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Cap1 } from './cap1/cap1';
import { CaptchaService } from '../../service/captcha-service';
import { Cap2 } from './cap2/cap2';
import { Cap3 } from './cap3/cap3';
@Component({
  selector: 'app-captcha-component',
  imports: [FormsModule, NgIf,Cap1,Cap2,Cap3],
  templateUrl: './captcha-component.html',
  styleUrl: './captcha-component.css',
})
export class CaptchaComponent {
  private captchaState = inject(CaptchaService)

  getsection(num: number) {
    return num === this.captchaState.getLevel() ;
  }
}
