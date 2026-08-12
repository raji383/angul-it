import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { CaptchaService } from '../../service/captcha-service';

@Component({
  selector: 'app-result-component',
  imports: [],
  templateUrl: './result-component.html',
  styleUrl: './result-component.css',
})
export class ResultComponent {
  private captchaState = inject(CaptchaService);
  private router = inject(Router)
  score = 0;
  totalStages = 0;
  ngOnInit() {
    
    if (this.captchaState.getLevel() < 3) {
      //this.router.navigateByUrl("/captcha")
    }
    const state = this.captchaState.getState();

    this.score = state.score;
    this.totalStages = this.captchaState.getcompletedStages();
  }
  restart(): void {
    this.captchaState.restart();
    this.router.navigate(['/captcha']);
  }

}
