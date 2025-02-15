import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuardService } from '../../core/core.module';

import { ExamplesComponent } from './examples/examples.component';
import { ParentComponent } from './theming/parent/parent.component';
import { AuthenticatedComponent } from './authenticated/authenticated.component';
import { TodosContainerComponent } from './todos/components/todos-container.component';
import { StockMarketContainerComponent } from './stock-market/components/stock-market-container.component';
import { CrudComponent } from './crud/components/crud.component';
import { FormComponent } from './form/components/form.component';
import { NotificationsComponent } from './notifications/components/notifications.component';
import { UserComponent } from './simple-state-management/components/user.component';
import { ElementsComponent } from './elements/elements.component';
import { provideEffects } from '@ngrx/effects';
import { provideState } from '@ngrx/store';
import { FEATURE_NAME, reducers } from './examples.state';
import { TodosEffects } from './todos/todos.effects';

const routes: Routes = [
  {
    path: '',
    component: ExamplesComponent,
    children: [
      {
        path: '',
        redirectTo: 'todos',
        pathMatch: 'full'
      },
      {
        path: 'todos',
        component: TodosContainerComponent,
        data: { title: 'anms.examples.menu.todos' },
        providers: [
          provideState(FEATURE_NAME, reducers),
          provideEffects(TodosEffects)
        ]
      },
      {
        path: 'stock-market',
        component: StockMarketContainerComponent,
        data: { title: 'anms.examples.menu.stocks' },
        providers: [
          provideState(FEATURE_NAME, reducers),
          provideEffects(TodosEffects)
        ]
      },
      {
        path: 'theming',
        component: ParentComponent,
        data: { title: 'anms.examples.menu.theming' }
        ,
        providers: [
          provideState(FEATURE_NAME, reducers),
          provideEffects(TodosEffects)
        ]
      },
      {
        path: 'crud',
        redirectTo: 'crud/',
        pathMatch: 'full'
        ,
        providers: [
          provideState(FEATURE_NAME, reducers),
          provideEffects(TodosEffects)
        ]
      },
      {
        path: 'crud/:id',
        component: CrudComponent,
        data: { title: 'anms.examples.menu.crud' }
        ,
        providers: [
          provideState(FEATURE_NAME, reducers),
          provideEffects(TodosEffects)
        ]
      },
      {
        path: 'simple-state-management',
        component: UserComponent,
        data: { title: 'anms.examples.menu.simple-state-management' }
        ,
        providers: [
          provideState(FEATURE_NAME, reducers),
          provideEffects(TodosEffects)
        ]
      },
      {
        path: 'form',
        component: FormComponent,
        data: { title: 'anms.examples.menu.form' }
        ,
        providers: [
          provideState(FEATURE_NAME, reducers),
          provideEffects(TodosEffects)
        ]
      },
      {
        path: 'notifications',
        component: NotificationsComponent,
        data: { title: 'anms.examples.menu.notifications' }
        ,
        providers: [
          provideState(FEATURE_NAME, reducers),
          provideEffects(TodosEffects)
        ]
      },
      {
        path: 'elements',
        component: ElementsComponent,
        data: { title: 'anms.examples.menu.elements' }
        ,
        providers: [
          provideState(FEATURE_NAME, reducers),
          provideEffects(TodosEffects)
        ]
      },
      {
        path: 'authenticated',
        component: AuthenticatedComponent,
        canActivate: [AuthGuardService],
        data: { title: 'anms.examples.menu.auth' }
        ,
        providers: [
          provideState(FEATURE_NAME, reducers),
          provideEffects(TodosEffects)
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExamplesRoutingModule {}
