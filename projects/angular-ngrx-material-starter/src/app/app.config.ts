import {
  ApplicationConfig,
  ErrorHandler,
  provideZoneChangeDetection
} from '@angular/core';
import { provideRouter, withDebugTracing } from '@angular/router';
import {
  HTTP_INTERCEPTORS,
  HttpClient,
  provideHttpClient,
  withFetch,
  withInterceptors,
  withInterceptorsFromDi
} from '@angular/common/http';
import { provideAnimations, provideNoopAnimations } from '@angular/platform-browser/animations';
import { provideStore } from '@ngrx/store';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { routes } from './app-routing.module';
import { metaReducers, reducers } from './core/core.state';
import { HttpErrorInterceptor } from './core/http-interceptors/http-error.interceptor';
import { RouterStateSerializer } from '@ngrx/router-store';
import { AppErrorHandler } from './core/error-handler/app-error-handler.service';
import { CustomSerializer } from './core/router/custom-serializer';
import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { AuthEffects } from './core/auth/auth.effects';
import { GoogleAnalyticsEffects } from './core/google-analytics/google-analytics.effects';
import { SettingsEffects } from './core/settings/settings.effects';

export function httpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(
    http,
    `${environment.i18nPrefix}/assets/i18n/`,
    '.json'
  );
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({
      eventCoalescing: true,
      ignoreChangesOutsideZone: true
    }),
    provideRouter(
      routes
      // withDebugTracing()
    ),
    provideAnimations(),
    provideNoopAnimations(),
    provideHttpClient(withInterceptors([]), withFetch()),
    { provide: HTTP_INTERCEPTORS, useClass: HttpErrorInterceptor, multi: true },
    { provide: ErrorHandler, useClass: AppErrorHandler },
    { provide: RouterStateSerializer, useClass: CustomSerializer },
    provideHttpClient(withInterceptorsFromDi()),
    provideStore(
      reducers, { metaReducers },
      
    ),
    provideEffects([AuthEffects, SettingsEffects, GoogleAnalyticsEffects]),
    provideStoreDevtools({
      maxAge: 25,
      logOnly: environment.production,
      name: 'Angular NgRx Material Starter'
    }),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpLoaderFactory,
        deps: [HttpClient]
      }
    }).providers,
  ]
};
