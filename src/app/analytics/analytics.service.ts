import { Injectable } from '@angular/core';

export abstract class Analytics {
  abstract trackAnalytics(): void;
}

@Injectable()
export class WeekdayAnalytics extends Analytics {
  trackAnalytics(): void {
    console.log('Analytics is tracked');
  }
}

@Injectable()
export class WeekendAnalytics extends Analytics {
  trackAnalytics(): void {
    console.log('Analytics is tracked for weekend');
  }
}
