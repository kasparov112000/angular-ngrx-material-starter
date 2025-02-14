import { Store, select } from '@ngrx/store';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';

import {
  routeAnimations,
  selectIsAuthenticated
} from '../../../core/core.module';

import { State } from '../examples.state';

// -- SharedModule for Standalone components imports
import { SharedModule } from '../../../shared/shared.module';
import { Router, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'anms-examples',
  imports: [SharedModule, RouterOutlet, RouterModule],
  templateUrl: './examples.component.html',
  styleUrls: ['./examples.component.scss'],
  animations: [routeAnimations],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExamplesComponent implements OnInit {
  isAuthenticated$: Observable<boolean>;

  examples = [
    { link: 'todos', label: 'anms.examples.menu.todos' },
    { link: 'stock-market', label: 'anms.examples.menu.stocks' },
    { link: 'theming', label: 'anms.examples.menu.theming' },
    { link: 'crud', label: 'anms.examples.menu.crud' },
    {
      link: 'simple-state-management',
      label: 'anms.examples.menu.simple-state-management'
    },
    { link: 'form', label: 'anms.examples.menu.form' },
    { link: 'notifications', label: 'anms.examples.menu.notifications' },
    { link: 'elements', label: 'anms.examples.menu.elements' },
    { link: 'authenticated', label: 'anms.examples.menu.auth', auth: true }
  ];

  constructor(private store: Store<State>, private router: Router) {}

  ngOnInit(): void {
    this.isAuthenticated$ = this.store.pipe(select(selectIsAuthenticated));
  }
  // -- navigate to link 
  navigateTo(link: string) {
    this.router.navigate([link]);
  }
}
