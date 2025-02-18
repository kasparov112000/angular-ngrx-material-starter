import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { ROUTE_ANIMATIONS_ELEMENTS } from '../../../core/core.module';
import { SharedModule } from '../../../shared/shared.module';

@Component({
    selector: 'anms-authenticated',
    imports: [SharedModule],
    templateUrl: './authenticated.component.html',
    styleUrls: ['./authenticated.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    
})
export class AuthenticatedComponent implements OnInit {
  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;

  constructor() {}

  ngOnInit() {}
}
