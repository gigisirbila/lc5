import { FactoryProvider } from '@angular/core';
import { Analytics, WeekdayAnalytics, WeekendAnalytics } from './analytics.service';

export const ANALYTICS_PROVIDER: FactoryProvider = {
  provide: Analytics,
  useFactory: () => {
    const day = new Date().getDay();
    return day === 0 || day === 6 ? new WeekendAnalytics() : new WeekdayAnalytics();
  },
};
