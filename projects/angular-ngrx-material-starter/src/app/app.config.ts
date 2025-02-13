import {
  ApplicationConfig,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter, withDebugTracing } from '@angular/router';

import { routes } from './app-routing.module';
import {
  provideClientHydration,
  withIncrementalHydration,
  withHttpTransferCacheOptions,
  withEventReplay,
} from '@angular/platform-browser';
import {
  provideHttpClient,
  withFetch,
  withInterceptors,
} from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({
      eventCoalescing: true,
      ignoreChangesOutsideZone: true,
    }),
    // provideExperimentalZonelessChangeDetection(),
    provideRouter(
      routes, 
      // withDebugTracing()
    ),
    provideClientHydration(
      withEventReplay(),
      withIncrementalHydration(),
      withHttpTransferCacheOptions({
        includePostRequests: true,
      })
    ),
    provideHttpClient(
      withInterceptors([]),
      withFetch()
    )
  ],
};
