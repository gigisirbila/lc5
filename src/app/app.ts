import { Component, signal } from '@angular/core';
import { ServiceComponent } from './service-component/service-component';

@Component({
  selector: 'app-root',
  imports: [ServiceComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('lc5');
}
