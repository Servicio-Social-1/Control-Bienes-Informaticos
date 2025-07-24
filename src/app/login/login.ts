import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-login',
  imports: [ButtonModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  public loading: boolean = false;

  load() {
    // Implement login logic here
    this.loading = true;
    // Simulate async operation
    setTimeout(() => {
      this.loading = false;
      // Add further logic as needed
    }, 1000);
  }
}
