import { enableProdMode } from '@angular/core';
  import { environment } from './environments/environment';
import { AppComponent } from './app/app/app.component';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { routes } from './app/app-routing.module';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    // ... other providers
    provideRouter(routes)
  ]
})
  .catch(err => console.error(err));
   