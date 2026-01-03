import { Component, Self, SkipSelf } from '@angular/core';
import { Srvc } from '../srvc';
import { Analytics } from '../analytics/analytics.service';
@Component({
  selector: 'app-service-component',
  imports: [],
  templateUrl: './service-component.html',
  styleUrl: './service-component.css',
  providers: [Srvc],
})
export class ServiceComponent {
  constructor(
    @Self() public local: Srvc,
    @SkipSelf() public global: Srvc,
    private analytics: Analytics
  ) {}

  track() {
    this.analytics.trackAnalytics();
  }
}
