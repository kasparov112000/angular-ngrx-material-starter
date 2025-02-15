import { Routes } from '@angular/router';
import { provideEffects } from '@ngrx/effects';
import { provideState } from '@ngrx/store';
import { reducers } from './core/core.state';
import { FEATURE_NAME } from './features/examples/examples.state';
import { TodosEffects } from './features/examples/todos/todos.effects';

export const routes: Routes = [
  { path: '', redirectTo: 'about', pathMatch: 'full' },
  {
    path: 'about',
    loadChildren: () => import('./features/about/about-routing.module').then(m => m.AboutRoutingModule)
  },
  {
    path: 'feature-list',
    loadChildren: () => import('./features/feature-list/feature-list-routing.module').then(m => m.FeatureListRoutingModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./features/settings/settings-routing.module').then(m => m.SettingsRoutingModule)
  },
  {
    path: 'examples',
    loadChildren: () => import('./features/examples/examples-routing.module').then(m => m.ExamplesRoutingModule),
    providers: [
      provideState(FEATURE_NAME, reducers),
      provideEffects(TodosEffects)
    ]
  },
  { path: '**', redirectTo: 'about' },

];
