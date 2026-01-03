import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { Srvc } from './srvc';
import { ANALYTICS_PROVIDER } from './analytics/analytics.provider';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    Srvc,
    ANALYTICS_PROVIDER,
  ],
};
