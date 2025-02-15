import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { routes } from './app-routing.module';


export const appConfig: ApplicationConfig = {
  providers: [
    provideStore({}),
    provideEffects([]),
    provideRouter(routes),
    provideStore({}),  // Add this
    provideEffects([]), // Add this if using effects
    // other providers...
  ]
};
