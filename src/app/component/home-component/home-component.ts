import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { CaptchaService } from '../../service/captcha-service';

@Component({
  selector: 'app-home-component',
  imports: [],
  templateUrl: './home-component.html',
  styleUrl: './home-component.css',
})
export class HomeComponent {
  private captchaState = inject(CaptchaService)
  private router = inject(Router)
  captchPage(level?: number) {
    if (level) {
      this.captchaState.setLevel(level)
    }
    this.router.navigateByUrl("/captcha")

  }

}
